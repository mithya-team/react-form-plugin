// CheckboxInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { Option } from "../@types";
import ErrorField from "./Error";

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
  const id = `form-${name}`;
  return (
    <>
      {options.map((option, index) => (
        <div key={index} className={classes?.container}>
          <input
            id={`${id}-${index}`}
            {...register(name)}
            {...rest}
            type="checkbox"
            value={option.value}
            className={classes?.checkbox}
          />
          <label htmlFor={`${id}-${index}`} className={classes?.label}>
            {option.label}
          </label>
        </div>
      ))}
      <ErrorField
        id={`${id}-error`}
        className={classes?.error}
        error={errors[name]}
      />
    </>
  );
};

export default CheckboxInput;
