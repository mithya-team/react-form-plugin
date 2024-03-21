import React from "react";
import { Resolver, FieldValues, SubmitHandler, DefaultValues } from "react-hook-form";
import { FieldInput } from "./@types";
interface ReactFormProps<TFieldValues extends FieldValues> {
    fields: FieldInput[];
    onSubmit: SubmitHandler<TFieldValues>;
    validation?: Resolver<TFieldValues>;
    classes?: Record<string, string>;
    defaultValues?: DefaultValues<TFieldValues>;
}
declare const ReactForm: <TFieldValues extends FieldValues>({ fields, onSubmit, validation, classes, defaultValues: initialValues, }: ReactFormProps<TFieldValues>) => React.ReactNode;
export default ReactForm;
