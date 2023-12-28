import React from "react";
import { Resolver, FieldValues, SubmitHandler } from "react-hook-form";
import { FieldInput } from "./@types";
interface ReactFormProps<TFieldValues extends FieldValues> {
  fieldsInput: FieldInput[];
  onSubmit: SubmitHandler<TFieldValues>;
  resolver: Resolver<TFieldValues>;
  classes?: Record<string, string>;
  onGetValues?: (getValuesFunction: () => object) => void;
}
declare const ReactForm: <TFieldValues extends FieldValues>({
  fieldsInput,
  onSubmit,
  resolver,
  classes,
}: ReactFormProps<TFieldValues>) => React.ReactNode;
export default ReactForm;
