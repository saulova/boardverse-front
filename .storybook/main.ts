const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: [
    "../docs/**/*.stories.mdx",
    "../docs/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/packages/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/pages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "storybook-addon-next",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    config.resolve.plugins = [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    ];
    return config;
  },
};
