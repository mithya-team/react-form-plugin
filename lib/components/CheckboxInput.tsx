// CheckboxInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { CheckboxInputProps } from "../@types";
import ErrorField from "./Error";

const CheckboxInput: React.FC<CheckboxInputProps> = ({
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
    <div className={`rf--checkbox-root ${classes?.root ?? ""}`}>
      {label && (
        <label htmlFor={id} className={`rf--label ${classes?.label ?? ""}`}>
          {label}
        </label>
      )}
      {options.map((option, index) => (
        <div
          key={index}
          className={`rf--checkbox-container ${classes?.container}`}
        >
          <input
            id={`${id}-${index}`}
            {...register(name)}
            {...rest}
            {...inputProps}
            type="checkbox"
            value={option.value}
            className={`rf--checkbox-input ${classes?.checkbox ?? ""}`}
          />
          <label
            htmlFor={`${id}-${index}`}
            className={`rf--label rf--checkbox-label ${classes?.label}`}
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

export default CheckboxInput;
