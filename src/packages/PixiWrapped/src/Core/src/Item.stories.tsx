// node_modules
import { useEffect, useRef } from "react";
import { Texture as PixiTexture } from "pixi.js";

// packages
import PixiWrapped from "@src-path/packages/PixiWrapped";

export default {
  title: "Packages/PixiWrapped/Core/Item",
  parameters: { controls: { disable: true } },
};

const Template = () => {
  const appDivRef = useRef<HTMLDivElement>(null!);

  const pixiApp = PixiWrapped.Core.App({
    width: 300,
    height: 300,
  });

  const texture = PixiTexture.from("alienPink.png");

  /* Begin Item example */

  const item = PixiWrapped.Core.Item({
    texture: texture,
    anchor: 0.5,
    x: 150,
    y: 150,
  });

  /* End Item example */

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

export const Item = Template.bind({});
