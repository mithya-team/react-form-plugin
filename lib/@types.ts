export type Option = {
  value: string;
  label: string;
};

export interface FieldInput {
  inputType: string;
  name: string;
  label?: string;
  options?: Option[]; // For select, radio, checkbox
  validation?: Record<string, unknown>; // Validation rules or schema for the field
  defaultValue?: FieldValue;
}

export type FieldValue = string | number | boolean;
