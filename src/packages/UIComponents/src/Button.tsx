// node_modules
import Icons from "@src-path/packages/Icons";
import { ReactNode, PointerEvent } from "react";

// utils of this package
import Utils from "./Utils";

interface IButtonProps {
  buttonColor?: string;
  buttonColorIntensity?: number;
  loadingColor?: string;
  loadingColorIntensity?: number;
  children: ReactNode;
  disabled?: boolean;
  error?: boolean;
  onClick?: (event: PointerEvent<any>) => void;
  isLoading?: boolean;
  typeSubmit?: boolean;
}

const Button = ({
  buttonColor,
  buttonColorIntensity,
  loadingColor,
  loadingColorIntensity,
  children,
  disabled,
  error,
  onClick,
  isLoading,
  typeSubmit,
}: IButtonProps) => {
  return (
    <button
      className={
        "flex flex-row flex-grow px-4 pt-1 pb-2 font-sans text-lg font-bold justify-center content-center rounded-sm appearance-none outline outline-1 outline-black disabled:bg-gray-300 disabled:text-gray-600" +
        (error
          ? " bg-red-600"
          : buttonColor
          ? " bg-" +
            Utils.FormatColorName({
              color: buttonColor,
              intensity: buttonColorIntensity ? buttonColorIntensity : 500,
            })
          : " bg-white")
      }
      type={typeSubmit ? "submit" : undefined}
      style={{
        boxShadow: "0px -5px rgba(0,0,0,0.15) inset",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? (
        <span
          className={
            "w-7 h-7" +
            (loadingColor
              ? " text-" +
                Utils.FormatColorName({
                  color: loadingColor,
                  intensity: loadingColorIntensity
                    ? loadingColorIntensity
                    : 500,
                })
              : " text-white")
          }
        >
          <Icons.Others.Loading />
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
