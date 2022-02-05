// node_modules
import { animate } from "popmotion";
import { Container as PixiContainer, Graphics as PixiGraphics } from "pixi.js";

// types
import { SlotProps } from "./Slot.types";
import PixiWrapped from "@src-path/packages/PixiWrapped";

export default function Slot(props: SlotProps): [PixiContainer, () => void] {
  const container = new PixiContainer();
  container.width = 100;
  container.height = 100;

  // create background
  const background = new PixiGraphics();

  PixiWrapped.Core.Shapes.Rectangle({
    graphics: background,
    color: 0xededed,
    width: 100,
    height: 100,
  });

  container.addChild(background);

  // create number
  const numberText = PixiWrapped.Core.Text({
    text: "0",
    x: 50,
    y: 45,
    anchor: { x: 0.5, y: 0.5 },
    style: {
      fontFamily: "Luckiest Guy",
      fontSize: 70,
      dropShadow: true,
      dropShadowAngle: 1.5,
      dropShadowDistance: 5,
      fill: "white",
      strokeThickness: 5,
    },
  });

  container.addChild(numberText);

  // create mask
  const trimMask = new PixiGraphics();

  PixiWrapped.Core.Shapes.Rectangle({
    graphics: trimMask,
    width: 100,
    height: 100,
  });

  container.addChild(trimMask);

  container.mask = trimMask;

  var numberInt = 0;

  var numberOfTurns = 0;

  const selectecValue = 4;

  const goDownFirstPart = () => {
    animate({
      from: 45,
      to: 200,
      duration: 50,
      onUpdate: (latest) => {
        numberText.y = Math.round(latest);
        numberText.scale.set(numberText.scale.x, 1 - (1 * latest) / 150);
      },
      onComplete: () => {
        numberText.y = -50;
        numberInt = numberInt + 1;
        if (numberInt == 10) {
          numberInt = 0;
        }
        numberText.text = "" + numberInt;
        goDownSecondPart();
        return;
      },
    });
  };

  const goDownSecondPart = () => {
    animate({
      from: -100,
      to: 45,
      duration: 50,
      onUpdate: (latest) => {
        numberText.y = Math.round(latest);
        numberText.scale.set(numberText.scale.x, (1 * latest) / 45);
      },
      onComplete: () => {
        numberOfTurns = numberOfTurns + 1;
        if (numberOfTurns <= 2 * 10 || numberInt != selectecValue) {
          goDownFirstPart();
        }
        return;
      },
    });
  };

  return [container, goDownFirstPart];
}
