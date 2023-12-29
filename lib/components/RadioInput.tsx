// RadioInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { IInputProps, Option } from "../@types";
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
  inputProps?: IInputProps;
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
        <div
          key={index}
          className={`radio-container ${classes?.container ?? ""}`}
        >
          <input
            id={`${id}-${index}`}
            {...register(name)}
            {...rest}
            type="radio"
            {...inputProps}
            value={option.value}
            className={`radio-input ${classes?.radio ?? ""}`}
          />
          <label
            htmlFor={`${id}-${index}`}
            className={`radio-label ${classes?.label}`}
          >
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
