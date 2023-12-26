import React from "react";
import { Option } from "../@types";
interface DynamicInputProps {
    inputType: string;
    name: string;
    label?: string;
    validation?: Record<string, unknown>;
    options?: Option[];
    classes?: Record<string, string>;
}
declare const DynamicInput: React.FC<DynamicInputProps>;
export default DynamicInput;
