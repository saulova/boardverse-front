// node_modules
import {
  LoaderResource as PixiLoaderResource,
  Container as PixiContainer,
} from "pixi.js";
import { Dict } from "@pixi/utils";

// packages
import PixiWrapped from "@src-path/packages/PixiWrapped";

interface ICreateItemsProps {
  resources: Dict<PixiLoaderResource>;
  inGame: {
    id: string;
    textureId: string;
    x: number;
    y: number;
    locked: boolean;
  }[];
  onChangeItem: (id: string) => void;
}

const CreateItems = ({
  resources,
  inGame,
  onChangeItem,
}: ICreateItemsProps) => {
  const container = new PixiContainer();
  inGame.map((item) => {
    const texture = resources[item.textureId].texture;

    if (texture) {
      const sprite = PixiWrapped.Core.Item({
        texture: texture,
        scale: 0.5,
      });

      sprite.name = item.id;
      sprite.x = item.x;
      sprite.y = item.y;

      if (item.locked == false) {
        sprite.interactive = true;
        sprite.buttonMode = true;

        const dragEventFunctions = PixiWrapped.Motion.Drag({
          itemToMove: sprite,
          startAlpha: 0.5,
          endAlpha: 1,
          maxX: 3000,
          maxY: 3000,
        });

        sprite
          .on("pointerdown", (event) => {
            dragEventFunctions.onDragStart(event);
          })
          .on("pointerup", () => {
            dragEventFunctions.onDragEnd();
            onChangeItem(item.id);
          })
          .on("pointerupoutside", () => {
            dragEventFunctions.onDragEnd();
            onChangeItem(item.id);
          })
          .on("pointermove", (event) => {
            dragEventFunctions.onDragMove(event);
          });
      }
      container.addChild(sprite);
    }
  });

  return container;
};

export default CreateItems;
