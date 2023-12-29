import React from "react";
import { Resolver, FieldValues, SubmitHandler } from "react-hook-form";
import { FieldInput } from "./@types";
interface ReactFormProps<TFieldValues extends FieldValues> {
    fields: FieldInput[];
    onSubmit: SubmitHandler<TFieldValues>;
    validation: Resolver<TFieldValues>;
    classes?: Record<string, string>;
    onGetValues?: (getValuesFunction: () => object) => void;
}
declare const ReactForm: <TFieldValues extends FieldValues>({ fields, onSubmit, validation, classes, }: ReactFormProps<TFieldValues>) => React.ReactNode;
export default ReactForm;
