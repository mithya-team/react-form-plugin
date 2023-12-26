export type Option = {
    value: string;
    label: string;
};
export interface FieldInput {
    inputType: string;
    name: string;
    label?: string;
    options?: Option[];
    validation?: Record<string, unknown>;
    defaultValue?: FieldValue;
}
export type FieldValue = string | number | boolean;
