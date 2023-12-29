import React from "react";
import { IInputProps } from "../@types";
interface BasicInputProps {
    type: string;
    name: string;
    label?: string;
    validation?: Record<string, unknown>;
    classes?: {
        container?: string;
        inputContainer?: string;
        label?: string;
        input?: string;
        error?: string;
    };
    inputProps?: IInputProps;
}
declare const BasicInput: React.FC<BasicInputProps>;
export default BasicInput;
