import React from "react";
import { useFormContext } from "react-hook-form";
import { Option } from "../@types";

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
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  options,
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
      <select
        id={id}
        {...register(name, validation)}
        className={classes?.select}
        {...rest}
        aria-invalid={errors[name] ? "true" : "false"}
        aria-describedby={`${id}-error`}
      >
        {options.map((option, index) => (
          <option value={option.value} key={index} className={classes?.option}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <span id={`${id}-error`} className={classes?.error}>
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default SelectInput;
