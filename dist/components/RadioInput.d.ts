import React from "react";
import { Option } from "../@types";
interface RadioInputProps {
    name: string;
    options: Option[];
    classes?: {
        container?: string;
        radio?: string;
        label?: string;
        error?: string;
    };
}
declare const RadioInput: React.FC<RadioInputProps>;
export default RadioInput;
