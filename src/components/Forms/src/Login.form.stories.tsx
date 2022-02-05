// node_module
import { ComponentStoryFn } from "@storybook/react";

// packages
import Forms from "@src-path/components/Forms";

export default {
  title: "Components/Forms/Login",
  component: Forms.Login,
  parameters: { controls: { disable: true }, layout: "fullscreen" },
};

const Template: ComponentStoryFn<typeof Forms.Login> = () => {
  return <Forms.Login onSubmit={async (value) => {}} />;
};

export const Login = Template.bind({});
