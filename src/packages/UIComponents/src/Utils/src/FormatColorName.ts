import ColorInfo from "./ColorInfo";

interface IFormatColorNameProps {
  color: string;
  intensity?: number;
}

const FormatColorName = ({
  color,
  intensity,
}: IFormatColorNameProps): string => {
  const colorFinded = ColorInfo.colors.find((element) => element == color);

  var intensity = ColorInfo.intensities.find((element) => element == intensity);

  if (!intensity) {
    intensity = 500;
  }

  if (!colorFinded) {
    return "black";
  }

  if (colorFinded == "black" || colorFinded == "white") {
    return color;
  }

  return color + "-" + intensity;
};

export default FormatColorName;
