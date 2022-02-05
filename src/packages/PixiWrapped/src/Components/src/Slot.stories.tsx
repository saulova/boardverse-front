// node_modules
import { useEffect, useRef } from "react";

// packages
import PixiWrapped from "@src-path/packages/PixiWrapped";

export default {
  title: "Packages/PixiWrapped/Components/Slot",
  parameters: { controls: { disable: true } },
};

const Template = () => {
  const appDivRef = useRef<HTMLDivElement>(null!);

  const pixiApp = PixiWrapped.Core.App({
    width: 300,
    height: 300,
  });

  /* Begin Item example */

  const [item, spin] = PixiWrapped.Components.Slot({});
  //
  item.x = 100;
  item.y = 100;

  /* End Item example */

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
        onClick={spin}
        className="px-3 py-2 mt-2 text-white bg-blue-500 border border-blue-600 rounded"
      >
        Spin
      </button>
    </div>
  );
};

export const Slot = Template.bind({});
