// node_modules
import { ComponentStoryFn } from "@storybook/react";

// packages
import UIComponents from "@src-path/packages/UIComponents";
import Icons from "@src-path/packages/Icons";

export default {
  title: "Packages/UIComponents/Input",
  component: UIComponents.Input,
  argTypes: {
    disabled: { defaultValue: false, control: { type: "boolean" } },
    error: { defaultValue: false, control: { type: "boolean" } },
    id: {
      defaultValue: "example",
      control: { type: "text" },
    },
    icon: {
      options: ["none", "Example Icon"],
      defaultValue: "none",
      mapping: {
        none: undefined,
        "Example Icon": <Icons.HeroIcons.Outline.User />,
      },
      control: { type: "radio" },
    },
    label: {
      defaultValue: "Example",
      control: { type: "text" },
    },
    labelColor: {
      options: UIComponents.Utils.ColorInfo.colors,
      defaultValue: "black",
      control: { type: "select" },
    },
    labelColorIntensity: {
      options: UIComponents.Utils.ColorInfo.intensities,
      defaultValue: 500,
      control: { type: "select" },
    },
    onChange: {
      control: { disable: true },
    },
    placeholder: {
      defaultValue: "Write something",
      control: { type: "text" },
    },
    readOnly: { defaultValue: false, control: { type: "boolean" } },
    type: {
      defaultValue: "text",
      control: { type: "text" },
    },
    value: {
      defaultValue: "",
      control: { type: "text" },
    },
  },
};

const Template: ComponentStoryFn<typeof UIComponents.Input> = (props) => {
  return <UIComponents.Input {...props} />;
};

export const Input = Template.bind({});
