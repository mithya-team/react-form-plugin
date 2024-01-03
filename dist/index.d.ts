import { FieldInput, Field, SwitchInputProps, CountryPhoneNumberInputProps, OtpInputProps } from "./@types";
import ReactForm from "./ReactForm";
import { addInputType, getInputComponent } from "./components/InputComponentsMap";
import ErrorField from "./components/Error";
type FormFields = FieldInput | Field<"switch", SwitchInputProps> | Field<"country-phone-number", CountryPhoneNumberInputProps> | Field<"otp", OtpInputProps>;
export { ReactForm, addInputType, getInputComponent, ErrorField };
export type { FieldInput, FormFields };
