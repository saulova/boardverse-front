interface IGetMostFrequentlyColorProps {
  image: HTMLImageElement;
}

export default function IGetMostFrequentlyColor({
  image,
}: IGetMostFrequentlyColorProps) {
  const width = 200;
  const height = 200;

  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  var context = canvas.getContext("2d");

  var mostFrequentlyColor = "#ffffff";

  function round(v: number) {
    return 5 * Math.round(v / 5);
  }

  function numberToHexString(c: number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r: number, g: number, b: number) {
    return (
      "#" + numberToHexString(r) + numberToHexString(g) + numberToHexString(b)
    );
  }

  if (context) {
    context.drawImage(image, 0, 0, width, height);

    var map = context.getImageData(0, 0, width, height).data;

    var hex, r, g, b;
    var colorCounter: { [key: string]: number } = {};
    for (var i = 0, len = map.length; i < len; i += 4) {
      r = round(map[i]);
      g = round(map[i + 1]);
      b = round(map[i + 2]);

      hex = rgbToHex(r, g, b);

      if (colorCounter[hex] === undefined) {
        colorCounter[hex] = 1;
      } else {
        colorCounter[hex]++;
      }
    }

    var counted = 0;
    for (var color in colorCounter) {
      if (counted < colorCounter[color]) {
        mostFrequentlyColor = color;
        counted = colorCounter[color];
      }
    }
  }
  return mostFrequentlyColor;
}
