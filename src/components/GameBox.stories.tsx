// node_modules
import { ComponentStoryFn } from "@storybook/react";

// packages
import { default as Box } from "@src-path/components/GameBox";

export default {
  title: "Components/Game Box",
  component: Box,
  argTypes: {
    url: {
      description: "Game cover url.",
      control: { type: null },
    },

    spinning: {
      description: "Set true to spin.",
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
  },
};

const Template: ComponentStoryFn<typeof Box> = (props) => {
  return <Box {...props} url="chess/chess_box.png" />;
};

export const GameBox = Template.bind({});
