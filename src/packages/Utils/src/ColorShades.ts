interface IColorShadesProps {
  color: number;
  percent: number;
}

export default function ColorShades({ color, percent }: IColorShadesProps) {
  const amt = Math.round(2.55 * percent);

  var red = (color >> 16) + amt;
  var blue = ((color >> 8) & 0x00ff) + amt;
  var green = (color & 0x0000ff) + amt;

  if (red > 255) {
    red = 255;
  }

  if (red < 1) {
    red = 0;
  }

  if (blue > 255) {
    blue = 255;
  }

  if (blue < 1) {
    blue = 0;
  }

  if (green > 255) {
    green = 255;
  }

  if (green < 1) {
    green = 0;
  }

  return red * 0x10000 + blue * 0x100 + green;
}
