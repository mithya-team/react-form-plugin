// RadioInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { Option } from "../@types";
import ErrorField from "./Error";

interface RadioInputProps {
  name: string;
  options: Option[];
  classes?: {
    container?: string;
    radio?: string;
    label?: string;
    error?: string;
  };
}

const RadioInput: React.FC<RadioInputProps> = ({
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
            type="radio"
            value={option.value}
            className={classes?.radio}
            {...rest}
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

export default RadioInput;
