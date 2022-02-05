// node_modules
import { Sprite as PixiSprite, Texture as PixiTexture } from "pixi.js";

interface IItemProps {
  texture: PixiTexture;
  anchor?: number;
  scale?: number;
  tint?: number;
  x?: number;
  y?: number;
  interactive?: boolean;
  buttonMode?: boolean;
}

export default function Item({
  texture,
  anchor,
  scale,
  tint,
  x,
  y,
  interactive,
  buttonMode,
}: IItemProps): PixiSprite {
  const itemSprite = new PixiSprite(texture);

  itemSprite.anchor.set(anchor ? anchor : 0.5);
  itemSprite.scale.set(scale ? scale : 1);
  itemSprite.tint = tint ? tint : 0xffffff;
  itemSprite.x = x ? x : 0;
  itemSprite.y = y ? y : 0;
  itemSprite.interactive = interactive ? interactive : false;
  itemSprite.buttonMode = buttonMode ? buttonMode : false;

  return itemSprite;
}
