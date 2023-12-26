import React from "react";
import { Option } from "../@types";
interface SelectInputProps {
    name: string;
    options: Option[];
    label?: string;
    validation?: Record<string, unknown>;
    classes?: {
        container?: string;
        select?: string;
        label?: string;
        option?: string;
        error?: string;
    };
}
declare const SelectInput: React.FC<SelectInputProps>;
export default SelectInput;
