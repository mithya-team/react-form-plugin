// SwitchInput.tsx
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { SwitchInputProps } from "../@types";
import "./index.css";
const SwitchInput: React.FC<SwitchInputProps> = ({
  name,
  classes,
  label,
  inputProps,
}) => {
  const { control } = useFormContext();
  const id = `switch-${name}`;
  // TODO: Review css classnames and fix if any
  return (
    <div
      className={`d-switch-container rf--switch-container ${
        classes?.switchContainer ?? ""
      }`}
    >
      {label && (
        <label
          htmlFor={id}
          className={`d-switch-label rf--switch-root-label ${
            classes?.label ?? ""
          }`}
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
              {...inputProps}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              className={`d-switch-input rf--switch-input ${
                classes?.input ?? ""
              }`}
              checked={value === true ? true : false}
              type="checkbox"
              aria-checked={value ? "true" : "false"} // Dynamically update aria-checked
            />
            <label
              htmlFor={id}
              className={`d-switch rf--switch-label ${classes?.switch ?? ""} ${
                classes?.activeSwitch ?? ""
              }`}
            >
              <span
                role="button"
                className={`d-switch-button rf--switch-button ${
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
