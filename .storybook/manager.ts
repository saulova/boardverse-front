import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const boardverseTheme = create({
  base: "light",
  brandTitle: "Documentation of Boardverse",
  brandImage: "logo.png",
});

addons.setConfig({
  theme: boardverseTheme,
});
