import React from "react";
import {
  useForm,
  FormProvider,
  Resolver,
  FieldValues,
  SubmitHandler,
  DefaultValues,
} from "react-hook-form";
import DynamicInput from "./components/DynamicInput";
import { FieldInput } from "./@types";
import { getDefaultValueObject } from "./utils";
import { evaluateConditions } from "./utils/form";

interface ReactFormProps<TFieldValues extends FieldValues> {
  fields: FieldInput[];
  onSubmit: SubmitHandler<TFieldValues>;
  validation: Resolver<TFieldValues>; // Resolver from react-hook-form
  classes?: Record<string, string>; // Object for CSS classes
  onGetValues?: (getValuesFunction: () => object) => void; // Callback function to expose getValues
}

const ReactForm = <TFieldValues extends FieldValues>({
  fields,
  onSubmit,
  validation,
  classes,
}: ReactFormProps<TFieldValues>): React.ReactNode => {
  const defaultValues = getDefaultValueObject(
    fields
  ) as DefaultValues<TFieldValues>;
  const methods = useForm<TFieldValues>({
    resolver: validation,
    defaultValues: defaultValues,
  });

  const formValues = methods.watch(); // Get current form values

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={classes?.formContainer}
      >
        {fields.map((field, index) => {
          const updatedField = evaluateConditions(formValues, field);

          if (updatedField?.hide) return null;

          return (
            <DynamicInput
              key={index}
              type={updatedField.type}
              name={updatedField.name}
              label={updatedField.label}
              options={updatedField?.options}
              validation={updatedField.validation}
              classes={updatedField?.classes}
            />
          );
        })}
        <button type="submit" className={classes?.submitButton}>
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default ReactForm;
