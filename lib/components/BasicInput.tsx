// BasicInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import ErrorField from "./Error";
import { BasicInputProps } from "../@types";

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
    <div className={`container ${classes?.container ?? ""}`}>
      {label && (
        <label htmlFor={id} className={`input-label ${classes?.label ?? ""}`}>
          {label}
        </label>
      )}
      <div className={`input-container ${classes?.inputContainer ?? ""}`}>
        {inputProps?.startAdornment ? inputProps.startAdornment : null}
        <input
          id={id}
          className={`input ${classes?.input}`}
          {...register(name)}
          type={type}
          {...rest}
          {...inputProps}
          aria-invalid={errors[name] ? "true" : "false"}
          aria-describedby={`${id}-error`}
        />
        {inputProps?.endAdornment ? inputProps.endAdornment : null}
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
