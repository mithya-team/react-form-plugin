// DynamicInput.tsx
import React, { InputHTMLAttributes } from "react";
import { Option } from "../@types";
import { getInputComponent } from "./InputComponentsMap";
import BasicInput from "./BasicInput";

interface DynamicInputProps {
  type: string;
  name: string;
  label?: string;
  validation?: Record<string, unknown>;
  options?: Option[]; // for select, radio, and checkbox
  classes?: Record<string, string>; // Object of classes for styling
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const DynamicInput: React.FC<DynamicInputProps> = ({ type, ...props }) => {
  const InputComponent = getInputComponent(type) || BasicInput; // Fallback to BasicInput if not found

  return <InputComponent type={type} {...props} />;
};

export default DynamicInput;
