// node_module
import { ComponentStoryFn } from "@storybook/react";

// packages
import Pages from "@src-path/components/Pages";

export default {
  title: "Components/Pages/Login",
  component: Pages.Login,
  parameters: { controls: { disable: true }, layout: "fullscreen" },
};

const Template: ComponentStoryFn<typeof Pages.Login> = () => {
  return <Pages.Login />;
};

export const Login = Template.bind({});
