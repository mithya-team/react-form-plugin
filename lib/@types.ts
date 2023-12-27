export type Option = {
  value: string;
  label: string;
};

export type FieldInput = {
  inputType: string;
  name: string;
  label?: string;
  options?: Option[]; // For select, radio, checkbox
  validation?: Record<string, unknown>; // Validation rules or schema for the field
  defaultValue?: FieldValue;
  showWhen?: (formValue: Record<string, unknown>) => boolean;
  classes?: Record<string, string>;
};

export type FieldValue = string | number | boolean;
