import { FieldInput } from "./@types";
import ReactForm from "./ReactForm";
import {
  addInputType,
  getInputComponent,
} from "./components/InputComponentsMap";
import SwitchInput from "./components/SwitchInput";

addInputType("switch", SwitchInput);

export { ReactForm, addInputType, getInputComponent };
export type { FieldInput };
