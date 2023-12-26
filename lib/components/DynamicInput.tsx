// DynamicInput.tsx
import React from "react";
import { Option } from "../@types";
import { getInputComponent } from "./InputComponentsMap";
import BasicInput from "./BasicInput";

interface DynamicInputProps {
  inputType: string;
  name: string;
  label?: string;
  validation?: Record<string, unknown>;
  options?: Option[]; // for select, radio, and checkbox
  classes?: Record<string, string>; // Object of classes for styling
}

const DynamicInput: React.FC<DynamicInputProps> = ({ inputType, ...props }) => {
  const InputComponent = getInputComponent(inputType) || BasicInput; // Fallback to some DefaultInput if not found

  return <InputComponent type={inputType} {...props} />;
};

export default DynamicInput;
