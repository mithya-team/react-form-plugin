// BasicInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import ErrorField from "./Error";
import { BasicInputProps } from "../@types";
import "./index.css";

const BasicInput: React.FC<BasicInputProps> = ({
  type,
  name,
  label,
  classes,
  inputProps,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const id = `form-${name}`;
  return (
    <div className={`d-container rf--container ${classes?.container ?? ""}`}>
      {label && (
        <label
          htmlFor={id}
          className={`rf--input-label ${classes?.label ?? ""}`}
        >
          {label}
        </label>
      )}
      <div
        className={`d-input-container rf--input-container ${
          classes?.inputContainer ?? ""
        }`}
      >
        {inputProps?.startAdornment ? (
          <div className="d-start-adornment rf--start-adornment">
            {" "}
            {inputProps?.startAdornment}
          </div>
        ) : null}
        <input
          id={id}
          className={`d-input rf--input ${classes?.input}`}
          {...register(name)}
          type={type}
          {...rest}
          {...inputProps}
          aria-invalid={errors[name] ? "true" : "false"}
          aria-describedby={`${id}-error`}
        />
        {inputProps?.endAdornment ? (
          <div className="d-end-adornment rf--end-adornment">
            {inputProps?.endAdornment}
          </div>
        ) : null}
      </div>

      <ErrorField
        id={`${id}-error`}
        className={classes?.error}
        error={errors?.[name]}
      />
    </div>
  );
};

export default BasicInput;
