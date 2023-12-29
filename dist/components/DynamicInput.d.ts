import React, { InputHTMLAttributes } from "react";
import { Option } from "../@types";
interface DynamicInputProps {
    type: string;
    name: string;
    label?: string;
    validation?: Record<string, unknown>;
    options?: Option[];
    classes?: Record<string, string>;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
}
declare const DynamicInput: React.FC<DynamicInputProps>;
export default DynamicInput;
