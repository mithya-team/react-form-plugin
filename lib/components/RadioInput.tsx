// RadioInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { RadioInputProps } from "../@types";
import ErrorField from "./Error";

const RadioInput: React.FC<RadioInputProps> = ({
  name,
  options,
  classes,
  inputProps,
  label,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const id = `form-${name}`;
  return (
    <div
      className={`d-radio-container rf--radio-container ${
        classes?.container ?? ""
      }`}
    >
      {label && (
        <label htmlFor={id} className={`rf--label ${classes?.rootLabel ?? ""}`}>
          {label}
        </label>
      )}
      {options.map((option, index) => (
        <div
          key={index}
          className={`rf--radio-container ${classes?.container ?? ""}`}
        >
          <input
            id={`${id}-${index}`}
            {...register(name)}
            {...rest}
            type="radio"
            {...inputProps}
            value={option.value}
            className={`rf--radio-input ${classes?.radio ?? ""}`}
          />
          <label
            htmlFor={`${id}-${index}`}
            className={`rf-label rf--radio-label ${classes?.label}`}
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
    </div>
  );
};

export default RadioInput;
