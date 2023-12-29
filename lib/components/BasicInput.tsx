// BasicInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import ErrorField from "./Error";
import { IInputProps } from "../@types";

interface BasicInputProps {
  type: string;
  name: string;
  label?: string;
  validation?: Record<string, unknown>; // Define more specific type as needed
  classes?: {
    container?: string;
    label?: string;
    input?: string;
    error?: string;
  };
  inputProps?: IInputProps;
}

const BasicInput: React.FC<BasicInputProps> = ({
  type,
  name,
  label,
  validation,
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
    <div className={`input-container ${classes?.container ?? ""}`}>
      {label && (
        <label htmlFor={id} className={`input-label ${classes?.label ?? ""}`}>
          {label}
        </label>
      )}
      <div>
        {inputProps?.startAdornment ? inputProps.startAdornment : null}
        <input
          id={id}
          className={`input ${classes?.input}`}
          {...register(name, validation)}
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
