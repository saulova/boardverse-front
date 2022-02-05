// node_modules
import { ReactNode } from "react";

// utils of this package
import Utils from "./Utils";

interface IContainerProps {
  bgColor?: string;
  bgColorIntensity?: number;
  children: ReactNode;
  header?: ReactNode;
  headerColor?: string;
  headerColorIntensity?: number;
}

const Container = ({
  bgColor,
  bgColorIntensity,
  children,
  header,
  headerColor,
  headerColorIntensity,
}: IContainerProps) => {
  return (
    <div
      className={
        "flex flex-col pb-2 rounded-sm bg-gradient-to-b outline-1 outline outline-black" +
        (bgColor
          ? " bg-" +
            Utils.FormatColorName({
              color: bgColor,
              intensity: bgColorIntensity ? bgColorIntensity : 500,
            })
          : " bg-white")
      }
      style={{
        boxShadow: "5px 5px rgba(0,0,0,0.15), 0px -10px rgba(0,0,0,0.15) inset",
      }}
    >
      {header && (
        <div
          className={
            "flex pb-3 pt-1" +
            (headerColor
              ? " bg-" +
                Utils.FormatColorName({
                  color: headerColor,
                  intensity: headerColorIntensity ? headerColorIntensity : 500,
                })
              : " bg-gray-500")
          }
          style={{
            boxShadow:
              "0px 5px rgba(0,0,0,0.15), 0px -10px rgba(0,0,0,0.15) inset",
          }}
        >
          {header}
        </div>
      )}
      {children}
    </div>
  );
};

export default Container;
