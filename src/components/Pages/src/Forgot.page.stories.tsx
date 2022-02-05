// node_module
import { ComponentStoryFn } from "@storybook/react";

// packages
import Pages from "@src-path/components/Pages";

export default {
  title: "Components/Pages/Forgot",
  component: Pages.Forgot,
  parameters: { controls: { disable: true }, layout: "fullscreen" },
};

const Template: ComponentStoryFn<typeof Pages.Forgot> = () => {
  return <Pages.Forgot />;
};

export const Forgot = Template.bind({});
