// SwitchInput.tsx
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import "./SwitchInput.css";
import { IInputProps } from "../../@types";

interface SwitchInputProps {
  type: string;
  name: string;
  label?: string;
  validation?: Record<string, unknown>; // Define more specific type as needed
  classes?: {
    switchContainer?: string;
    label?: string;
    switch?: string;
    button?: string;
    input?: string;
    activeSwitch?: string;
    activeButton?: string;
  };
  inputProps?: IInputProps;
}

const SwitchInput: React.FC<SwitchInputProps> = ({
  name,
  classes,
  label,
  inputProps,
  ...rest
}) => {
  const { control } = useFormContext();
  const id = `switch-${name}`;
  // TODO: Review css classnames and fix if any
  return (
    <div
      className={`d-switch-container switch-container ${
        classes?.switchContainer ?? ""
      }`}
    >
      {label && (
        <label
          htmlFor={id}
          className={`d-switch-label switch-root-label ${classes?.label ?? ""}`}
        >
          {label}
        </label>
      )}

      {/* The switch */}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value = false, ref } }) => (
          <>
            <input
              id={id}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              className={`d-switch-input switch-input ${classes?.input ?? ""}`}
              {...rest}
              {...inputProps}
              checked={value === true ? true : false}
              type="checkbox"
              aria-checked={value ? "true" : "false"} // Dynamically update aria-checked
            />
            <label
              htmlFor={id}
              className={`d-switch switch-label ${classes?.switch ?? ""} ${
                classes?.activeSwitch ?? ""
              }`}
            >
              <span
                role="button"
                className={`d-switch-button switch-button ${
                  classes?.button ?? ""
                } ${classes?.activeButton ?? ""}`}
              ></span>
            </label>
          </>
        )}
      />
    </div>
  );
};

export default SwitchInput;
