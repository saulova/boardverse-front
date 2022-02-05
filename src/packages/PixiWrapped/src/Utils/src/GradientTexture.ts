import { Texture as PixiTexture } from "pixi.js";
import { GradientTextureProps } from "./GradientTexture.types";

export default function GradientTexture(props: GradientTextureProps) {
  const { width, height, angle, from, via, to } = {
    ...props,
    angle: ((props.angle * Math.PI) / 180 + Math.PI / 2) * -1,
  };

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const maxLength = width;
  const aspect = height / width;
  const midWidth = width / 2;
  const midHeight = height / 2;

  const x0 = midWidth + Math.cos(angle) * maxLength * 0.5;
  const y0 = midHeight + Math.sin(angle) * maxLength * 0.5 * aspect;
  const x1 = midWidth - Math.cos(angle) * maxLength * 0.5;
  const y1 = midHeight - Math.sin(angle) * maxLength * 0.5 * aspect;

  const context = canvas.getContext("2d");

  if (context) {
    const gradient = context.createLinearGradient(x0, y0, x1, y1);

    gradient.addColorStop(
      from.offset / 100,
      "#" + from.color.toString(16).padStart(6, "0")
    );

    if (via) {
      gradient.addColorStop(
        via.offset / 100,
        "#" + via.color.toString(16).padStart(6, "0")
      );
      console.log("via");
    }

    gradient.addColorStop(
      to.offset / 100,
      "#" + to.color.toString(16).padStart(6, "0")
    );

    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
  }

  return PixiTexture.from(canvas);
}
