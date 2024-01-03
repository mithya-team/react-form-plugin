// BasicInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import ErrorField from "./Error";
import { BasicInputProps } from "../@types";
import "./index.css";

const BasicInput: React.FC<BasicInputProps> = ({
  type,
  name,
  label,
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
    <div className={`rf--basic-input-root ${classes?.container ?? ""}`}>
      {label && (
        <label htmlFor={id} className={`rf--label ${classes?.label ?? ""}`}>
          {label}
        </label>
      )}
      <div className={`rf--input-container ${classes?.inputContainer ?? ""}`}>
        {inputProps?.startAdornment ? (
          <div className="rf--start-adornment">
            {inputProps?.startAdornment}
          </div>
        ) : null}
        <input
          id={id}
          className={`rf--input ${classes?.input}`}
          {...register(name)}
          type={type}
          {...rest}
          {...inputProps}
          aria-invalid={errors[name] ? "true" : "false"}
          aria-describedby={`${id}-error`}
        />
        {inputProps?.endAdornment ? (
          <div className="rf--end-adornment">{inputProps?.endAdornment}</div>
        ) : null}
      </div>

      <ErrorField
        id={`${id}-error`}
        className={classes?.error}
        error={errors?.[name]}
      />
    </div>
  );
};

export default BasicInput;
