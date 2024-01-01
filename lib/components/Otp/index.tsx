import React, { useEffect, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ErrorField from "../Error";
import { OtpInputProps } from "../../@types";

const OtpInput: React.FC<OtpInputProps> = ({
  name,
  length,
  classes,
  label,
  inputProps,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleKeyUp = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace") {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else {
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const id = `form-${name}`;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value = "" } }) => (
          <div
            className={`phone-otp-input ${classes?.root ?? ""}`}
            role="group"
            aria-labelledby={`${id}-label`}
          >
            {label && (
              <div
                id={`${id}-label`}
                className={`phone-otp-input ${classes?.label ?? ""}`}
              >
                {label}
              </div>
            )}
            {Array.from({ length }).map((_, index) => (
              <input
                {...inputProps}
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="numeric"
                maxLength={1}
                onChange={(e) => {
                  const val = value?.split("");
                  val[index] = e.target.value;
                  onChange(val.join(""));
                }}
                aria-label={`Digit ${index + 1}`}
                onKeyUp={(e) => handleKeyUp(e, index)}
                onBlur={onBlur}
                value={value?.[index] || ""}
                className={`otp-input ${classes?.input ?? ""}`}
                aria-invalid={errors?.[name] ? true : false}
                autoComplete="one-time-code"
              />
            ))}
          </div>
        )}
      />
      <ErrorField
        id={`${id}-error`}
        className={classes?.error}
        error={errors?.[name]}
      />
    </>
  );
};

export default OtpInput;