/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import BasicInput from "./BasicInput";
import CheckboxInput from "./CheckboxInput";
import RadioInput from "./RadioInput";
import SelectInput from "./SelectInput";
import PlainText from "./PlainText";

// Define the structure of the input component map
interface IInputComponentsMap {
  [key: string]: React.FC<any>;
}

// eslint-disable-next-line react-refresh/only-export-components
const InputComponentMap: IInputComponentsMap = {
  text: BasicInput,
  password: BasicInput,
  telephone: BasicInput,
  email: BasicInput,
  select: SelectInput,
  radio: RadioInput,
  checkbox: CheckboxInput,
  plainText: PlainText,
};

export const addInputType = (type: string, component: React.FC<any>) => {
  if (type in InputComponentMap) {
    console.warn(
      `Input type "${type}" is already registered. Overriding existing component.`
    );
  } else {
    console.log(`Registering new input type "${type}".`);
  }

  // Add component to the map
  InputComponentMap[type] = component;
};

export const getInputComponent = (type: string): React.FC<any> => {
  if (type in InputComponentMap) return InputComponentMap[type];

  return BasicInput;
};

export const listRegisteredtypes = () => {
  return Object.keys(InputComponentMap);
};
