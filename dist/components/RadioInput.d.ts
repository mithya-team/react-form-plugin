import React from "react";
import { IInputProps, Option } from "../@types";
interface RadioInputProps {
    name: string;
    options: Option[];
    classes?: {
        container?: string;
        radio?: string;
        label?: string;
        error?: string;
    };
    inputProps?: IInputProps;
}
declare const RadioInput: React.FC<RadioInputProps>;
export default RadioInput;
