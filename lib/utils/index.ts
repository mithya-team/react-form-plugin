import { FieldInput, FieldValue } from "../@types";

export const getDefaultValueObject = (fields: FieldInput[] = []) => {
  const result: Record<string, FieldValue> = {};

  fields.forEach((field) => {
    if (field.defaultValue) {
      result[field.name] = field.defaultValue;
    }
  });

  return result;
};
