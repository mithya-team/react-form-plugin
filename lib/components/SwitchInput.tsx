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
    <div className={`rf--switch-root ${classes?.switchContainer ?? ""}`}>
      {label && (
        <label
          htmlFor={id}
          className={`rf--switch-label rf--label ${classes?.label ?? ""}`}
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
              className={`rf--switch-input ${classes?.input ?? ""}`}
              checked={value === true ? true : false}
              type="checkbox"
              aria-checked={value ? "true" : "false"} // Dynamically update aria-checked
            />
            <label
              htmlFor={id}
              className={`rf--label rf--switch ${classes?.switch ?? ""} ${
                classes?.activeSwitch ?? ""
              }`}
            >
              <span
                role="button"
                className={`rf--switch-button ${classes?.button ?? ""} ${
                  classes?.activeButton ?? ""
                }`}
              ></span>
            </label>
          </>
        )}
      />
    </div>
  );
};

export default SwitchInput;
