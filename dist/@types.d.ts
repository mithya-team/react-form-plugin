import { InputHTMLAttributes, ReactElement } from "react";
export type Option = {
    value: string;
    label: string;
    disabled?: boolean;
};
export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>, "type"> {
    startAdornment?: ReactElement;
    endAdornment?: ReactElement;
}
export type BasicInputType = "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "range" | "search" | "tel" | "text" | "time" | "url" | "week";
export interface SwitchInputProps {
    type: "switch";
    name: string;
    label?: string;
    classes?: {
        switchContainer?: string;
        label?: string;
        switch?: string;
        button?: string;
        input?: string;
        activeSwitch?: string;
        activeButton?: string;
    };
    inputProps?: IInputProps;
    defaultValue?: boolean;
}
export interface CountryPhoneNumberInputProps {
    name: string;
    classes?: {
        root?: string;
        select?: string;
        input?: string;
        inputWrapper?: string;
        selectWrapper?: string;
        error?: string;
        label?: string;
    };
    label?: string;
    inputProps?: IInputProps;
    selectProps?: IInputProps;
    defaultValue?: string;
}
export interface OtpInputProps {
    name: string;
    length: number;
    label?: string;
    classes?: {
        root?: string;
        input?: string;
        error?: string;
        label?: string;
    };
    inputProps?: IInputProps;
    defaultValue?: string;
}
export type BasicInputProps = {
    type: `${BasicInputType}`;
    name: string;
    label?: string;
    classes?: {
        container?: string;
        inputContainer?: string;
        label?: string;
        input?: string;
        error?: string;
    };
    inputProps?: IInputProps;
    defaultValue?: string;
};
export interface SelectInputProps {
    type: "select";
    name: string;
    options: Option[];
    label?: string;
    classes?: {
        container?: string;
        select?: string;
        label?: string;
        option?: string;
        error?: string;
    };
    inputProps?: IInputProps;
    defaultValue?: Option["value"];
}
export interface RadioInputProps {
    type: "radio";
    name: string;
    options: Option[];
    label?: string;
    classes?: {
        container?: string;
        radio?: string;
        label?: string;
        error?: string;
        rootLabel?: string;
    };
    inputProps?: IInputProps;
    defaultValue?: Option["value"];
}
export interface PlainTextProps {
    type: "plainText";
    name: string;
    text?: string | JSX.Element;
    className?: string;
}
export interface CheckboxInputProps {
    type: "checkbox";
    name: string;
    options: Option[];
    label?: string;
    classes?: {
        container?: string;
        checkbox?: string;
        label?: string;
        error?: string;
    };
    inputProps?: IInputProps;
    defaultValue?: Option["value"][];
}
type InputProps = CheckboxInputProps | RadioInputProps | BasicInputProps | SelectInputProps | PlainTextProps;
type SharedFields = {
    hide?: boolean;
    conditions?: FieldConditions[];
    name: string;
};
export type Field<Type = "custom", FieldProps = unknown> = FieldProps & {
    type: Type;
} & SharedFields;
export type FieldInput = (InputProps & SharedFields) | (Field<string, unknown> & SharedFields);
export type FieldConditions = {
    when: (formValue: Record<string, unknown>) => boolean;
    then: (currentField: FieldInput) => Partial<FieldInput>;
};
export type FieldValue = string | number | boolean;
export {};
