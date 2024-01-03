import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ErrorField from "../Error";
import { CountryPhoneNumberInputProps } from "../../@types";

const countries = [
  { name: "United States", code: "+1", pattern: "(xxx) xxx-xxxx" },
  { name: "United Kingdom", code: "+44", pattern: "xxxx xxxxxx" },
  { name: "Canada", code: "+1", pattern: "(xxx) xxx-xxxx" },
];

const CountryPhoneNumberInput: React.FC<CountryPhoneNumberInputProps> = ({
  name,
  classes,
  label,
  inputProps,
  selectProps,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countries[0].code
  );
  const [, setPhonePattern] = useState(countries[0].pattern);
  const id = `form-${name}`;
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value = "", ref } }) => (
          <div className={`rf--phone-number-root ${classes?.root ?? ""}`}>
            {label && (
              <div
                id={`${id}-label`}
                className={`rf--label ${classes?.label ?? ""}`}
              >
                {label}
              </div>
            )}
            <div
              className={`rf--phone-number-country-select-wrapper ${
                classes?.selectWrapper ?? ""
              }`}
            >
              <select
                {...selectProps}
                onChange={(e) => {
                  const selectedCountry = countries.find(
                    (c) => c.name === e.target.value
                  );
                  setSelectedCountryCode(selectedCountry?.code || "");
                  setPhonePattern(selectedCountry?.pattern || "");
                  onChange(`${selectedCountry?.code} `); // Set country code as part of the value
                }}
                aria-label="Country Code"
                onBlur={onBlur}
                ref={ref}
                className={`rf--phone-number-country-select ${
                  classes?.select ?? ""
                }`}
              >
                {countries.map((country, index) => (
                  <option key={index} value={country.name}>
                    ({country.code})
                  </option>
                ))}
              </select>
            </div>

            <div
              className={`rf--phone-number-input-wrapper ${
                classes?.inputWrapper ?? ""
              }`}
            >
              <input
                type="tel"
                // pattern={phonePattern}
                {...inputProps}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className={`rf--input rf--phone-number-input ${
                  classes?.input ?? ""
                }`}
                placeholder={`${selectedCountryCode} `}
                aria-invalid={errors?.[name] ? true : false}
                aria-label="Phone Number"
              />
            </div>
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

export default CountryPhoneNumberInput;
