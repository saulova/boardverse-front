// node_modules
import {
  TextStyle as PixiTextStyle,
  Text as PixiText,
  ITextStyle as IPixiTextStyle,
} from "pixi.js";

export interface ITextProps {
  text: string;
  x?: number;
  y?: number;
  anchor?: { x: number; y: number };
  style?: Partial<IPixiTextStyle>;
}

export default function Text({ text, x, y, anchor, style }: ITextProps) {
  const textStyle = new PixiTextStyle({
    ...style,
  });

  const textItem = new PixiText(text);

  textItem.x = x ? x : 0;
  textItem.y = y ? y : 0;

  if (anchor) {
    textItem.anchor.set(anchor.x, anchor.y);
  }

  textItem.style = textStyle;

  return textItem;
}
