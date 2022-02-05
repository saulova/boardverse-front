// node_module
import { ComponentStoryFn } from "@storybook/react";

// packages
import Forms from "@src-path/components/Forms";

export default {
  title: "Components/Forms/Sign Up",
  component: Forms.SignUp,
  parameters: { controls: { disable: true }, layout: "fullscreen" },
};

const Template: ComponentStoryFn<typeof Forms.SignUp> = () => {
  return <Forms.SignUp onSubmit={async (value) => {}} />;
};

export const SignUp = Template.bind({});
