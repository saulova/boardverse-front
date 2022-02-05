// node_modules
import { Container as PixiContainer, Sprite as PixiSprite } from "pixi.js";
import { animate as PopAnimate } from "popmotion";

interface IFlipProps {
  item: PixiContainer | PixiSprite;
  direction?: "x" | "y";
  onStart?: () => void;
  onMiddle?: () => void;
  onEnd?: () => void;
}

export default function Flip(props: IFlipProps) {
  const runFlip = () => {
    const xScale = props.item.scale.x;
    const yScale = props.item.scale.y;

    if (props.onStart) {
      props.onStart();
    }

    const getNewScale = (latest: number) => {
      console.log(latest);
      if (props.direction && props.direction == "y") {
        const value = Math.round(yScale * latest) / 100;

        return { x: xScale, y: value };
      }

      const value = Math.round(xScale * latest) / 100;

      return { x: value, y: yScale };
    };

    PopAnimate({
      from: 100,
      to: 0,
      repeat: 1,
      repeatType: "reverse",
      onPlay: props.onStart,
      onUpdate: (latest) => {
        const newScale = getNewScale(latest);
        props.item.scale.set(newScale.x, newScale.y);
      },
      onRepeat: props.onMiddle,
      onComplete: props.onEnd,
    });
  };

  return runFlip;
}
