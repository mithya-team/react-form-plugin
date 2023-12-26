// BasicInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";

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
}

const BasicInput: React.FC<BasicInputProps> = ({
  type,
  name,
  label,
  validation,
  classes,
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
        aria-invalid={errors[name] ? "true" : "false"}
        aria-describedby={`${id}-error`}
      />
      {errors[name] && (
        <span id={`${id}-error`} className={classes?.error}>
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default BasicInput;
