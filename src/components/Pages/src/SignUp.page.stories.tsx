// node_module
import { ComponentStoryFn } from "@storybook/react";

// packages
import Pages from "@src-path/components/Pages";

export default {
  title: "Components/Pages/Sign Up",
  component: Pages.SignUp,
  parameters: { controls: { disable: true }, layout: "fullscreen" },
};

const Template: ComponentStoryFn<typeof Pages.SignUp> = () => {
  return <Pages.SignUp />;
};

export const SignUp = Template.bind({});
