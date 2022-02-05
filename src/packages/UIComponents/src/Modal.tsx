// node_modules
import { ReactNode } from "react";

interface IModalProps {
  children: ReactNode;
  show: boolean;
}

const Modal = ({ children, show }: IModalProps) => {
  return (
    <div
      id="myModal"
      className={
        "fixed left-0 top-0 flex w-full h-full p-0 m-0 overflow-hidden bg-gray-300 z-50" +
        (show ? "" : " hidden")
      }
    >
      <div className="m-auto">{children}</div>
    </div>
  );
};

export default Modal;
