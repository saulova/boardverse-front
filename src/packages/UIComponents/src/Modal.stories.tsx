// node_modules
import { ComponentStoryFn } from "@storybook/react";

// packages
import UIComponents from "@src-path/packages/UIComponents";

export default {
  title: "Packages/UIComponents/Modal",
  component: UIComponents.Modal,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    show: { defaultValue: false, control: { type: "boolean" } },
  },
};

const Template: ComponentStoryFn<typeof UIComponents.Modal> = (props) => {
  return (
    <>
      <div className="flex h-screen">
        <h1 className="m-auto">Example of page content.</h1>
      </div>
      <UIComponents.Modal {...props}>
        {/* Example of Content*/}
        <div className="w-80">
          <UIComponents.Container>
            <p className="p-3 text-justify indent-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </UIComponents.Container>
        </div>
        {/* Example of Content*/}
      </UIComponents.Modal>
    </>
  );
};

export const Modal = Template.bind({});
