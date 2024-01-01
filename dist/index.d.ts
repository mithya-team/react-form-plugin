import { FieldInput, Field, SwitchInputProps, CountryPhoneNumberInputProps, OtpInputProps } from "./@types";
import ReactForm from "./ReactForm";
import { addInputType, getInputComponent } from "./components/InputComponentsMap";
type FormFields = FieldInput | Field<"switch", SwitchInputProps> | Field<"country-phone-number", CountryPhoneNumberInputProps> | Field<"otp", OtpInputProps>;
export { ReactForm, addInputType, getInputComponent };
export type { FieldInput, FormFields };
