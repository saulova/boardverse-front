// node_modules
import { useEffect, useRef } from "react";
import { Texture as PixiTexture } from "pixi.js";

// packages
import PixiWrapped from "@src-path/packages/PixiWrapped";

export default {
  title: "Packages/PixiWrapped/Motion/Drag",
  parameters: { controls: { disable: true } },
};

const Template = () => {
  const appDivRef = useRef<HTMLDivElement>(null!);

  const pixiApp = PixiWrapped.Core.App({
    width: 300,
    height: 300,
  });

  const texture = PixiTexture.from("alienYellow.png");

  const item = PixiWrapped.Core.Item({
    texture: texture,
    anchor: 0.5,
    x: 150,
    y: 150,
    interactive: true,
    buttonMode: true,
  });

  /* Begin Drag example */

  const dragEventFunctions = PixiWrapped.Motion.Drag({
    itemToMove: item,
    startAlpha: 0.5,
    endAlpha: 1,
    maxX: 300,
    maxY: 300,
  });

  item
    .on("pointerdown", dragEventFunctions.onDragStart)
    .on("pointerup", dragEventFunctions.onDragEnd)
    .on("pointerupoutside", dragEventFunctions.onDragEnd)
    .on("pointermove", dragEventFunctions.onDragMove);

  /* End Drag example */

  pixiApp.stage.addChild(item);

  useEffect(() => {
    appDivRef.current.appendChild(pixiApp.view);

    pixiApp.start();

    return () => {
      pixiApp.destroy(true, true);
    };
  }, []);

  return <div ref={appDivRef} />;
};

export const Drag = Template.bind({});
