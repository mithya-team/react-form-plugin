export type Option = {
    value: string;
    label: string;
};
export type FieldInput = {
    inputType: string;
    name: string;
    label?: string;
    options?: Option[];
    validation?: Record<string, unknown>;
    defaultValue?: FieldValue;
    classes?: Record<string, string>;
    disable?: boolean;
    hide?: boolean;
    conditions?: FieldConditions[];
};
export type FieldConditions = {
    when: (formValue: Record<string, unknown>) => boolean;
    then: (currentField: FieldInput) => Partial<FieldInput>;
};
export type FieldValue = string | number | boolean;
