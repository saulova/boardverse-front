// node_modules
import {
  Container as PixiContainer,
  Application as PixiApplication,
} from "pixi.js";
import { useEffect, useRef, useState } from "react";
import * as Colyseus from "colyseus.js";

// packages
import PixiWrapped from "@src-path/packages/PixiWrapped";
import ModalLoading from "@src-path/components/ModalLoading";
import CreateItems from "./CreateItems";

interface IAppProps {
  assets: { id: string; url: string }[];
}

const App = ({ assets }: IAppProps) => {
  const appDivRef = useRef<HTMLDivElement>(null!);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  let pixiApp: PixiApplication;

  const loadPixiApp = async () => {
    pixiApp = PixiWrapped.Core.App({
      resizeTo: document.documentElement,
    });

    const handleLoadingProgress = (status: any) => {
      if (status.error.lenght > 0) {
        console.log(status.error);
      }
      if (status.progress != loadingProgress) {
        setLoadingProgress(status.progress);
      }
      if (status.complete) {
        setIsLoading(false);
      }
    };

    let itemsContainer: PixiContainer;

    const ssl =
      process.env.NEXT_PUBLIC_BACK_END_SSL &&
      process.env.NEXT_PUBLIC_BACK_END_SSL == "true"
        ? "wss://"
        : "ws://";

    const host = process.env.NEXT_PUBLIC_BACK_END_HOST
      ? process.env.NEXT_PUBLIC_BACK_END_HOST
      : "127.0.0.1";

    const port = process.env.NEXT_PUBLIC_BACK_END_PORT
      ? process.env.NEXT_PUBLIC_BACK_END_PORT
      : "8090";

    const url = ssl + host + ":" + port + "/";

    var client = new Colyseus.Client(url);

    let gameRoom: Colyseus.Room;

    try {
      const tokenFromLocalStorage = localStorage
        .getItem("token")
        ?.replace("Bearer ", "");

      gameRoom = await client.joinOrCreate("chess", {
        token: tokenFromLocalStorage,
      });
    } catch (e) {
      console.log("JOIN ERROR", e);
      return;
    }

    const handleAssets = PixiWrapped.Core.LoadResources({
      resources: assets,
      callbackProgress: handleLoadingProgress,
    });

    handleAssets.load((_, resources) => {
      const container = new PixiContainer();

      container.width = 3000;
      container.height = 3000;

      gameRoom.state.inGame.map((itemOfInGameArray: any, index: any) => {
        itemOfInGameArray.onChange = (changes: any) => {
          changes.forEach((change: any) => {
            const pixiItem = itemsContainer.getChildByName(
              gameRoom.state.inGame[index].id
            );

            if (change.field == "x") {
              pixiItem.x = change.value;
            }

            if (change.field == "y") {
              pixiItem.y = change.value;
            }

            return;
          });
        };
      });

      itemsContainer = CreateItems({
        resources,
        inGame: gameRoom.state.inGame,
        onChangeItem: (id) => {
          const item = gameRoom.state.inGame.find(
            (element: any) => element.id == id
          );
          gameRoom.send("moveItem", {
            id: id,
            x: itemsContainer.getChildByName(id).x,
            y: itemsContainer.getChildByName(id).y,
          });
        },
      });

      itemsContainer.x = -(3000 / 2) + document.documentElement.clientWidth / 2;
      itemsContainer.y =
        -(3000 / 2) + document.documentElement.clientHeight / 2;

      // Add mouse wheel event to zoom in and out
      window.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
          const zoom = itemsContainer.scale.x + 0.01;
          itemsContainer.scale.set(zoom > 1.5 ? 1.5 : zoom);
        } else {
          const zoom = itemsContainer.scale.x - 0.01;
          itemsContainer.scale.set(zoom < 0.05 ? 0.05 : zoom);
        }
      });

      // Disable right click
      document.addEventListener("contextmenu", (event) =>
        event.preventDefault()
      );

      container.addChild(itemsContainer);

      pixiApp.stage.addChild(container);

      const joystickFront = resources["ui-1"].texture;
      const joystickBack = resources["ui-2"].texture;

      if (joystickBack && joystickFront) {
        const joystick = PixiWrapped.UI.Gamepad.Stick({
          frontTexture: joystickFront,
          backTexture: joystickBack,
          itemToMove: itemsContainer,
        });

        joystick.x = 100;
        joystick.y = document.documentElement.clientHeight - 100;

        pixiApp.stage.addChild(joystick);
      }
    });

    /* End Item example */

    appDivRef.current.appendChild(pixiApp.view);

    pixiApp.start();
  };

  useEffect(() => {
    loadPixiApp();
    return () => {
      pixiApp.destroy(true, true);
    };
  }, []);

  return (
    <>
      <div ref={appDivRef} />
      <ModalLoading show={isLoading} progress={loadingProgress} />
    </>
  );
};

export default App;
