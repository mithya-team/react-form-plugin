// RadioInput.tsx
import React, { InputHTMLAttributes } from "react";
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
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const RadioInput: React.FC<RadioInputProps> = ({
  name,
  options,
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
    <>
      {options.map((option, index) => (
        <div key={index} className={classes?.container}>
          <input
            id={`${id}-${index}`}
            {...register(name)}
            {...rest}
            type="radio"
            {...inputProps}
            value={option.value}
            className={classes?.radio}
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
