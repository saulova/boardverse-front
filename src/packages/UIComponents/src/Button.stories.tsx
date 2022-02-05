// node_modules
import { ComponentStoryFn } from "@storybook/react";

// packages
import UIComponents from "@src-path/packages/UIComponents";

export default {
  title: "Packages/UIComponents/Button",
  component: UIComponents.Button,
  argTypes: {
    buttonColor: {
      options: UIComponents.Utils.ColorInfo.colors,
      defaultValue: "white",
      control: {
        type: "select",
      },
    },
    buttonColorIntensity: {
      options: UIComponents.Utils.ColorInfo.intensities,
      defaultValue: 500,
      control: { type: "select" },
    },
    disabled: { defaultValue: false, control: { type: "boolean" } },
    error: { defaultValue: false, control: { type: "boolean" } },
    onClick: { control: { disable: true } },
    placeholder: {
      defaultValue: "Example",
      control: { type: "text" },
    },
    typeSubmit: { defaultValue: false, control: { type: "boolean" } },
  },
};

const Template: ComponentStoryFn<typeof UIComponents.Button> = (props) => {
  return <UIComponents.Button {...props}>Example</UIComponents.Button>;
};

export const Button = Template.bind({});
