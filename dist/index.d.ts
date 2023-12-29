import { FieldInput, Field, SwitchInputProps } from "./@types";
import ReactForm from "./ReactForm";
import { addInputType, getInputComponent } from "./components/InputComponentsMap";
type FormFields = FieldInput | Field<"switch", SwitchInputProps>;
export { ReactForm, addInputType, getInputComponent };
export type { FieldInput, FormFields };
