// CheckboxInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { Option } from "../@types";

interface CheckboxInputProps {
  name: string;
  options: Option[];
  classes?: {
    container?: string;
    checkbox?: string;
    label?: string;
    error?: string;
  }; // Object of classes
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  name,
  options,
  classes,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      {options.map((option, index) => (
        <div key={index} className={classes?.container}>
          <input
            id={`form-${name}-${index}`}
            {...register(name)}
            type="checkbox"
            value={option.value}
            className={classes?.checkbox}
            {...rest}
          />
          <label htmlFor={`form-${name}-${index}`} className={classes?.label}>
            {option.label}
          </label>
        </div>
      ))}
      {errors[name] && (
        <span className={classes?.error}>
          {errors[name]?.message as string}
        </span>
      )}
    </>
  );
};

export default CheckboxInput;
