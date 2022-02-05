// node_modules
import { ComponentStoryFn } from "@storybook/react";

// packages
import UIComponents from "@src-path/packages/UIComponents";

export default {
  title: "Packages/UIComponents/Container",
  component: UIComponents.Container,
  argTypes: {
    bgColor: {
      options: UIComponents.Utils.ColorInfo.colors,
      defaultValue: "white",
      control: { type: "select" },
    },
    bgColorIntensity: {
      options: UIComponents.Utils.ColorInfo.intensities,
      defaultValue: 500,
      control: { type: "select" },
    },
    header: {
      options: ["none", "Example Header"],
      defaultValue: "Example Header",
      mapping: {
        none: undefined,
        "Example Header": (
          <div className="m-auto font-sans text-lg text-white">
            Example Header
          </div>
        ),
      },
      control: { type: "radio" },
    },
    headerColor: {
      options: UIComponents.Utils.ColorInfo.colors,
      defaultValue: "gray",
      control: { type: "select" },
    },
    headerColorIntensity: {
      options: UIComponents.Utils.ColorInfo.intensities,
      defaultValue: 500,
      control: { type: "select" },
    },
  },
};

const Template: ComponentStoryFn<typeof UIComponents.Container> = (props) => {
  return (
    <UIComponents.Container {...props}>
      {/* content goes here */}
      <p className="mx-4 my-3 text-justify text-black indent-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {/* content goes here */}
    </UIComponents.Container>
  );
};

export const Container = Template.bind({});
