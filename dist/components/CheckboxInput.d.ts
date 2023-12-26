import React from "react";
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
}
declare const CheckboxInput: React.FC<CheckboxInputProps>;
export default CheckboxInput;
