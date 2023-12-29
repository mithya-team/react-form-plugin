import React from "react";
import { IInputProps, Option } from "../@types";
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
    inputProps?: IInputProps;
}
declare const SelectInput: React.FC<SelectInputProps>;
export default SelectInput;
