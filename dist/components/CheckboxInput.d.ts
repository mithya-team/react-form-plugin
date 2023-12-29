import React, { InputHTMLAttributes } from "react";
import { Option } from "../@types";
interface CheckboxInputProps {
    name: string;
    options: Option[];
    classes?: {
        container?: string;
        checkbox?: string;
        label?: string;
        error?: string;
    };
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
}
declare const CheckboxInput: React.FC<CheckboxInputProps>;
export default CheckboxInput;
