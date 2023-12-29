import React, { InputHTMLAttributes } from "react";
import { Option } from "../@types";
import { getInputComponent } from "./InputComponentsMap";

// type IDynamicInputProps = DynamicInputProps & {
//   type: string;
// };

interface IDynamicInputProps {
  type: string;
  name: string;
  label?: string;
  validation?: Record<string, unknown>;
  options?: Option[]; // for select, radio, and checkbox
  classes?: Record<string, string>; // Object of classes for styling
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const DynamicInput: React.FC<IDynamicInputProps> = ({ type, ...props }) => {
  const InputComponent = getInputComponent(type); // Falls back to BasicInput if not found

  return <InputComponent type={type} {...props} />;
};

export default DynamicInput;
