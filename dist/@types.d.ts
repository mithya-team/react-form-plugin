import { InputHTMLAttributes, ReactElement } from "react";
export type Option = {
    value: string;
    label: string;
};
export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>, "type"> {
    startAdornment?: ReactElement;
    endAdornment?: ReactElement;
}
export type FieldInput = {
    type: string;
    name: string;
    label?: string;
    options?: Option[];
    validation?: Record<string, unknown>;
    defaultValue?: FieldValue;
    classes?: Record<string, string>;
    hide?: boolean;
    conditions?: FieldConditions[];
    inputProps?: IInputProps;
    text?: string;
};
export type FieldConditions = {
    when: (formValue: Record<string, unknown>) => boolean;
    then: (currentField: FieldInput) => Partial<FieldInput>;
};
export type FieldValue = string | number | boolean;
