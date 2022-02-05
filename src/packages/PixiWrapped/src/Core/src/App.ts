// node_modules
import {
  Application as PixiApplication,
  settings as PixiSettings,
  SCALE_MODES as PIXI_SCALE_MODES,
} from "pixi.js";

interface IAppProps {
  width?: number;
  height?: number;
  backgroundColor?: number;
  resizeTo?: Window | HTMLElement;
}

export default function App(props: IAppProps) {
  PixiSettings.RESOLUTION =
    window.devicePixelRatio <= 1 ? 2 : window.devicePixelRatio;

  PixiSettings.SCALE_MODE = PIXI_SCALE_MODES.NEAREST;

  PixiSettings.ANISOTROPIC_LEVEL = 0;

  const pixiApp = new PixiApplication({
    autoDensity: true,
    resolution: window.devicePixelRatio <= 1 ? 2 : window.devicePixelRatio,
    ...props,
  });

  pixiApp.stage.sortableChildren = true;

  return pixiApp;
}
