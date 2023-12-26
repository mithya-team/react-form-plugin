import { FieldInput } from "./@types";
import GenericForm from "./GenericForm";
import {
  addInputType,
  getInputComponent,
} from "./components/InputComponentsMap";
import SwitchInput from "./components/SwitchInput";

addInputType("switch", SwitchInput);

export { GenericForm, addInputType, getInputComponent };
export type { FieldInput };
