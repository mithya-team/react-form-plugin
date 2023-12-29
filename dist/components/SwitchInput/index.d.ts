import React, { InputHTMLAttributes } from "react";
interface SwitchInputProps {
    type: string;
    name: string;
    label?: string;
    validation?: Record<string, unknown>;
    classes?: {
        switchContainer?: string;
        label?: string;
        switch?: string;
        button?: string;
        input?: string;
        activeSwitch?: string;
        activeButton?: string;
    };
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
}
declare const SwitchInput: React.FC<SwitchInputProps>;
export default SwitchInput;
