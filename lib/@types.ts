import { InputHTMLAttributes } from "react";

export type Option = {
  value: string;
  label: string;
};

export type FieldInput = {
  type: string;
  name: string;
  label?: string;
  options?: Option[]; // For select, radio, checkbox
  validation?: Record<string, unknown>; // Validation rules or schema for the field
  defaultValue?: FieldValue;
  classes?: Record<string, string>;
  hide?: boolean;
  conditions?: FieldConditions[];
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

export type FieldConditions = {
  when: (formValue: Record<string, unknown>) => boolean;
  then: (currentField: FieldInput) => Partial<FieldInput>;
};

export type FieldValue = string | number | boolean;
