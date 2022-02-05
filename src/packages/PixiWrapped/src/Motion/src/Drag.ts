import {
  InteractionEvent as PixiInteractionEvent,
  Container as PixiContainer,
  Sprite as PixiSprite,
} from "pixi.js";

interface IDragProps {
  itemToMove: PixiContainer | PixiSprite;
  startAlpha?: number;
  endAlpha?: number;
  maxX?: number;
  maxY?: number;
}

export default function Drag({
  itemToMove,
  startAlpha,
  endAlpha,
  maxX,
  maxY,
}: IDragProps) {
  var dragging = false;

  const onDragStart = (event: PixiInteractionEvent) => {
    if (event.data.button == 0 || event.data.button == 1) {
      if (startAlpha) {
        itemToMove.alpha = startAlpha;
      }
      dragging = true;
    }
  };

  const onDragEnd = () => {
    if (endAlpha) {
      itemToMove.alpha = endAlpha;
    }
    dragging = false;
  };

  const onDragMove = (event: PixiInteractionEvent) => {
    if (dragging) {
      const newPosition = event.data.getLocalPosition(itemToMove.parent);
      itemToMove.x = (() => {
        if (maxX && newPosition.x > maxX - itemToMove.width / 2) {
          return maxX - itemToMove.width / 2;
        }
        if (newPosition.x < itemToMove.width / 2) {
          return itemToMove.width / 2;
        }
        return newPosition.x;
      })();

      itemToMove.y = (() => {
        if (maxY && newPosition.y > maxY - itemToMove.height / 2) {
          return maxY - itemToMove.height / 2;
        }
        if (newPosition.y < itemToMove.height / 2) {
          return itemToMove.height / 2;
        }
        return newPosition.y;
      })();
    }
  };

  return { onDragStart, onDragEnd, onDragMove };
}
