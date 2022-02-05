// node_module
import { ComponentStoryFn } from "@storybook/react";

// packages
import Forms from "@src-path/components/Forms";

export default {
  title: "Components/Forms/Forgot",
  component: Forms.Forgot,
  parameters: { controls: { disable: true }, layout: "fullscreen" },
};

const Template: ComponentStoryFn<typeof Forms.Forgot> = () => {
  return <Forms.Forgot onSubmit={async (value) => {}} />;
};

export const Forgot = Template.bind({});
