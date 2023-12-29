import React from "react";
import { useFormContext } from "react-hook-form";
import { IInputProps, Option } from "../@types";
import ErrorField from "./Error";

interface SelectInputProps {
  name: string;
  options: Option[];
  label?: string;
  validation?: Record<string, unknown>; // Define more specific type as needed
  classes?: {
    container?: string;
    select?: string;
    label?: string;
    option?: string;
    error?: string;
  };
  inputProps?: IInputProps;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  options,
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
    <div className={`container ${classes?.container ?? ""}`}>
      {label && (
        <label htmlFor={id} className={`select-input ${classes?.label ?? ""}`}>
          {label}
        </label>
      )}
      <select
        id={id}
        {...register(name, validation)}
        className={`select-input ${classes?.select}`}
        {...rest}
        {...inputProps}
        aria-invalid={errors[name] ? "true" : "false"}
        aria-describedby={`${id}-error`}
      >
        {options.map((option, index) => (
          <option
            value={option.value}
            key={index}
            className={`select-option ${classes?.option ?? ""}`}
          >
            {option.label}
          </option>
        ))}
      </select>
      <ErrorField
        id={`${id}-error`}
        className={classes?.error}
        error={errors[name]}
      />
    </div>
  );
};

export default SelectInput;
