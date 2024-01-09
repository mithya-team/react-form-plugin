/// <reference types="react" />
import { FieldValues } from "react-hook-form";
import { FieldInput } from "../@types";
export declare const evaluateConditions: <TFieldValues extends FieldValues>(formValues: TFieldValues, fieldConfig: FieldInput) => {
    type: import("../@types").BasicInputType;
    name: string;
    label?: string | undefined;
    classes?: {
        container?: string | undefined;
        inputContainer?: string | undefined;
        label?: string | undefined;
        input?: string | undefined;
        error?: string | undefined;
        endAdornment?: string | undefined;
        startAdornment?: string | undefined;
    } | undefined;
    inputProps?: import("../@types").IInputProps | undefined;
    defaultValue?: string | undefined;
    hide?: boolean | undefined;
    conditions?: import("../@types").FieldConditions[] | undefined;
} | {
    type: "select";
    name: string;
    options: import("../@types").Option[];
    label?: string | undefined;
    classes?: {
        root?: string | undefined;
        container?: string | undefined;
        select?: string | undefined;
        label?: string | undefined;
        option?: string | undefined;
        error?: string | undefined;
    } | undefined;
    inputProps?: import("../@types").IInputProps | undefined;
    defaultValue?: string | undefined;
    hide?: boolean | undefined;
    conditions?: import("../@types").FieldConditions[] | undefined;
} | {
    type: "radio";
    name: string;
    options: import("../@types").Option[];
    label?: string | undefined;
    classes?: {
        root?: string | undefined;
        container?: string | undefined;
        radio?: string | undefined;
        label?: string | undefined;
        error?: string | undefined;
        rootLabel?: string | undefined;
    } | undefined;
    inputProps?: import("../@types").IInputProps | undefined;
    defaultValue?: string | undefined;
    hide?: boolean | undefined;
    conditions?: import("../@types").FieldConditions[] | undefined;
} | {
    type: "plainText";
    name: string;
    text?: string | JSX.Element | undefined;
    className?: string | undefined;
    hide?: boolean | undefined;
    conditions?: import("../@types").FieldConditions[] | undefined;
} | {
    type: "checkbox";
    name: string;
    options: import("../@types").Option[];
    label?: string | undefined;
    classes?: {
        root?: string | undefined;
        container?: string | undefined;
        checkbox?: string | undefined;
        label?: string | undefined;
        error?: string | undefined;
    } | undefined;
    inputProps?: import("../@types").IInputProps | undefined;
    defaultValue?: string[] | undefined;
    hide?: boolean | undefined;
    conditions?: import("../@types").FieldConditions[] | undefined;
} | {
    type: string;
    hide?: boolean | undefined;
    conditions?: import("../@types").FieldConditions[] | undefined;
    name: string;
};
