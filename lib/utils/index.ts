import { FieldInput, FieldValue } from "../@types";

export const getDefaultValueObject = (fields: FieldInput[] = []) => {
  const result: Record<string, FieldValue> = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fields.forEach((field: FieldInput | any) => {
    if (field?.defaultValue) {
      result[field.name] = field?.defaultValue;
    }
  });

  return result;
};
