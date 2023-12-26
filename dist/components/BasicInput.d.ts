import React from "react";
interface BasicInputProps {
    type: string;
    name: string;
    label?: string;
    validation?: Record<string, unknown>;
    classes?: {
        container?: string;
        label?: string;
        input?: string;
        error?: string;
    };
}
declare const BasicInput: React.FC<BasicInputProps>;
export default BasicInput;
