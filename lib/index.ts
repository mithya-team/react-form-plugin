import { FieldInput, Field, SwitchInputProps } from "./@types";
import ReactForm from "./ReactForm";
import {
  addInputType,
  getInputComponent,
} from "./components/InputComponentsMap";
import SwitchInput from "./components/SwitchInput";

// Dynamically adding switch component and overriding type
type FormFields = FieldInput | Field<"switch", SwitchInputProps>;
addInputType("switch", SwitchInput);

export { ReactForm, addInputType, getInputComponent };
export type { FieldInput, FormFields };
