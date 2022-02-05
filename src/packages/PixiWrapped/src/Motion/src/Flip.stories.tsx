// node_modules
import { useEffect, useRef } from "react";
import { Texture as PixiTexture } from "pixi.js";

// packages
import PixiWrapped from "@src-path/packages/PixiWrapped";

export default {
  title: "Packages/PixiWrapped/Motion/Flip",
  parameters: { controls: { disable: true } },
};

const Template = () => {
  const appDivRef = useRef<HTMLDivElement>(null!);

  const pixiApp = PixiWrapped.Core.App({
    width: 300,
    height: 300,
    backgroundColor: 0x4e9f3d,
  });

  const textureCardBack = PixiTexture.from("cardBack_red2.png");

  const textureCardFront = PixiTexture.from("cardDiamondsA.png");

  const item = PixiWrapped.Core.Item({
    texture: textureCardBack,
    anchor: 0.5,
    x: 150,
    y: 150,
  });

  /* Begin Flip example */

  var flipped = false;

  const runFlip = PixiWrapped.Motion.Flip({
    item: item,
    onMiddle: () => {
      if (!flipped) {
        item.texture = textureCardFront;
      } else {
        item.texture = textureCardBack;
      }
    },
    onEnd: () => {
      flipped = !flipped;
    },
  });

  /* End Flip example */

  pixiApp.stage.addChild(item);

  useEffect(() => {
    appDivRef.current.appendChild(pixiApp.view);

    pixiApp.start();

    return () => {
      pixiApp.destroy(true, true);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div ref={appDivRef} />
      <button
        onClick={runFlip}
        className="px-3 py-2 mt-2 text-white bg-blue-500 border border-blue-600 rounded"
      >
        Flip
      </button>
    </div>
  );
};

export const Flip = Template.bind({});
