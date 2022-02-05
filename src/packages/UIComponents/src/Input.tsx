// node_modules
import { ChangeEvent, ReactNode, FocusEvent } from "react";

// utils of this package
import Utils from "./Utils";

interface IInputProps {
  disabled?: boolean;
  error?: string;
  icon?: ReactNode;
  id: string;
  label?: string;
  labelColor?: string;
  labelColorIntensity?: number;
  onChange?: (event: ChangeEvent<any>) => void;
  onBlur?: (event: FocusEvent<any>) => void;
  placeholder?: string;
  readOnly?: boolean;
  type?: string;
  value: string;
}

const Input = ({
  disabled,
  error,
  icon,
  id,
  label,
  labelColor,
  labelColorIntensity,
  onChange,
  onBlur,
  placeholder,
  readOnly,
  type,
  value,
}: IInputProps) => {
  return (
    <div className="flex flex-col flex-grow mb-1">
      {label && (
        <label
          htmlFor={id}
          className={
            "ml-0.5 mb-0.5 text-sm font-sans font-semibold" +
            (labelColor
              ? " text-" +
                Utils.FormatColorName({
                  color: labelColor,
                  intensity: labelColorIntensity ? labelColorIntensity : 500,
                })
              : " text-black")
          }
        >
          {label}
        </label>
      )}
      <div className="flex flex-row w-full">
        {icon && (
          <div
            className={
              "inline-flex items-center px-1 text-sm text-gray-700 border rounded-l-sm shadow-sm" +
              (error
                ? " bg-red-100 border-red-200"
                : " bg-gray-300 border-gray-300")
            }
          >
            <span className="w-5 h-5">{icon}</span>
          </div>
        )}
        <input
          id={id}
          name={id}
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : ""}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className={
            "flex-grow p-1 font-sans text-sm text-gray-700 border rounded-sm appearance-none focus:outline focus:outline-1 focus:outline-gray-800 " +
            (icon && " border-l-0 rounded-l-none") +
            (error
              ? " bg-red-50 border-red-200"
              : " bg-white border-gray-300 disabled:bg-gray-100")
          }
          readOnly={readOnly}
          disabled={disabled}
        />
      </div>
      {error && <span className="mb-1 text-xs text-red-600">{error}</span>}
    </div>
  );
};

export default Input;
