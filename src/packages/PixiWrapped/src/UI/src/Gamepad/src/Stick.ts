import {
  Container as PixiContainer,
  InteractionData as PixiInteractionData,
  Point as PixiPoint,
  InteractionEvent as PixiInteractionEvent,
  Sprite as PixiSprite,
  Texture as PixiTexture,
} from "pixi.js";

interface IStickProps {
  backTexture: PixiTexture;
  frontTexture: PixiTexture;
  itemToMove: PixiSprite | PixiContainer;
}

export default function Stick({
  backTexture,
  frontTexture,
  itemToMove,
}: IStickProps) {
  const container = new PixiContainer();
  const backSprite = new PixiSprite(backTexture);
  const frontSprite = new PixiSprite(frontTexture);

  frontSprite.alpha = 0.5;

  backSprite.scale.set(0.7, 0.7);
  frontSprite.scale.set(0.7, 0.7);

  backSprite.anchor.set(0.5);
  frontSprite.anchor.set(0.5);

  frontSprite.interactive = true;

  let dragging: boolean = false;
  let eventData: PixiInteractionData;
  let startPosition: PixiPoint;
  let interval: any;

  let angle = 0;
  let power = 0;

  const handleOnStartInterval = () => {
    if (angle != null && dragging != false) {
      let x = itemToMove.x - Math.cos(angle) * 10 * (power / 100);

      if (x > 0) {
        x = 0;
      }

      if (x < -3000) {
        x = -3000;
      }

      itemToMove.x = x;

      var y = itemToMove.y - Math.sin(angle) * 10 * (power / 100);

      if (y > 0) {
        y = 0;
      }

      if (y < -3000) {
        y = -3000;
      }

      itemToMove.y = y;
    }
  };

  function onDragStart(event: PixiInteractionEvent) {
    eventData = event.data;
    startPosition = eventData.getLocalPosition(container);

    dragging = true;
    frontSprite.alpha = 1;

    interval = setInterval(handleOnStartInterval, 30);
  }

  function onDragEnd() {
    if (dragging == false) {
      return;
    }

    frontSprite.position.set(0, 0);

    dragging = false;
    frontSprite.alpha = 0.5;

    clearInterval(interval);
  }

  function onDragMove() {
    if (dragging == false) {
      return;
    }

    const newPosition = eventData.getLocalPosition(container);

    const minX = -1 * (backSprite.width / 2);
    const maxX = backSprite.width / 2;
    const minY = -1 * (backSprite.height / 2);
    const maxY = backSprite.height / 2;

    const hypotenuse = (x: number, y: number) => {
      return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    };

    const resultHypotenuse = hypotenuse(newPosition.x, newPosition.y);

    frontSprite.x = (() => {
      if (resultHypotenuse > maxX && newPosition.x >= 0) {
        return Math.floor(
          Math.cos(Math.atan2(newPosition.y, newPosition.x)) * maxX
        );
      } else if (resultHypotenuse > maxX && newPosition.x < 0) {
        return Math.floor(
          -1 * Math.cos(Math.atan2(newPosition.y, newPosition.x)) * minX
        );
      }
      return newPosition.x;
    })();

    frontSprite.y = (() => {
      if (resultHypotenuse > maxY && newPosition.y >= 0) {
        return Math.floor(
          Math.sin(Math.atan2(newPosition.y, newPosition.x)) * maxY
        );
      } else if (resultHypotenuse > maxY && newPosition.y < 0) {
        return Math.floor(
          -1 * Math.sin(Math.atan2(newPosition.y, newPosition.x)) * minY
        );
      }
      return newPosition.y;
    })();

    const angleNow = Math.atan2(frontSprite.y, frontSprite.x);

    var powerNow = Math.floor(
      (hypotenuse(frontSprite.x, frontSprite.y) * 100) / maxX
    );

    if (powerNow > 100) {
      powerNow = 100;
    }

    // start

    if (dragging == true) {
      angle = angleNow;
      power = powerNow;
    }
  }

  frontSprite
    .on("pointerdown", onDragStart)
    .on("pointerup", onDragEnd)
    .on("pointerupoutside", onDragEnd)
    .on("pointermove", onDragMove);

  container.addChild(backSprite);
  container.addChild(frontSprite);

  return container;
}
