// node_modules
import { Matrix as PixiMatrix } from "@pixi/math";

// packages
import PixiWrapped from "@src-path/packages/PixiWrapped";

// types of this component
import { RectangleProps } from "./Rectangle.types";

export default function Rectangle(props: RectangleProps) {
  if (props.border && !props.border.alpha) {
    props.border.alpha = 1;
  }

  if (props.color) {
    if (typeof props.color != "number") {
      const gradient = props.color;

      const textureGrad = PixiWrapped.Utils.GradientTexture({
        width: props.width,
        height: props.height,
        angle: gradient.angle,
        from: gradient.from,
        via: gradient.via ? gradient.via : undefined,
        to: gradient.to,
      });

      const matrixGrad = new PixiMatrix();

      matrixGrad.tx = props.x ? props.x : 0;
      matrixGrad.ty = props.y ? props.y : 0;

      props.graphics.beginTextureFill({
        texture: textureGrad,
        matrix: matrixGrad,
      });
    } else {
      props.graphics.beginFill(props.color, props.alpha);
    }
  }

  if (props.border) {
    props.graphics.lineStyle(
      props.border.width,
      props.border.color,
      props.border.alpha,
      1
    );
  } else {
    props.graphics.lineStyle(0);
  }

  if (props.cornerRadius) {
    props.graphics.drawRoundedRect(
      props.x ? props.x : 0,
      props.x ? props.x : 0,
      props.width,
      props.height,
      props.cornerRadius
    );
  } else {
    props.graphics.drawRect(
      props.x ? props.x : 0,
      props.y ? props.y : 0,
      props.width,
      props.height
    );
  }

  if (props.color) {
    props.graphics.endFill();
  }
}
