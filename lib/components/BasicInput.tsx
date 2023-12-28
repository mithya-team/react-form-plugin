// BasicInput.tsx
import React, { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import ErrorField from "./Error";

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
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
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
    <div className={classes?.container}>
      {label && (
        <label htmlFor={id} className={classes?.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={classes?.input}
        {...register(name, validation)}
        type={type}
        {...rest}
        {...inputProps}
        aria-invalid={errors[name] ? "true" : "false"}
        aria-describedby={`${id}-error`}
      />
      <ErrorField
        id={`${id}-error`}
        className={classes?.error}
        error={errors?.[name]}
      />
    </div>
  );
};

export default BasicInput;
