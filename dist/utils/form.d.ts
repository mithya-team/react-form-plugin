import { FieldValues } from "react-hook-form";
import { FieldInput } from "../@types";
export declare const evaluateConditions: <TFieldValues extends FieldValues>(
  formValues: TFieldValues,
  fieldConfig: FieldInput
) => {
  type: string;
  name: string;
  label?: string | undefined;
  options?: import("../@types").Option[] | undefined;
  validation?: Record<string, unknown> | undefined;
  defaultValue?: import("../@types").FieldValue | undefined;
  classes?: Record<string, string> | undefined;
  disable?: boolean | undefined;
  hide?: boolean | undefined;
  conditions?: import("../@types").FieldConditions[] | undefined;
};
