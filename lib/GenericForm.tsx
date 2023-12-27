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

interface GenericFormProps<TFieldValues extends FieldValues> {
  fieldsInput: FieldInput[];
  onSubmit: SubmitHandler<TFieldValues>;
  resolver: Resolver<TFieldValues>; // Resolver from react-hook-form
  classes?: Record<string, string>; // Object for CSS classes
  onGetValues?: (getValuesFunction: () => object) => void; // Callback function to expose getValues
}

const GenericForm = <TFieldValues extends FieldValues>({
  fieldsInput,
  onSubmit,
  resolver,
  classes,
}: GenericFormProps<TFieldValues>): React.ReactNode => {
  const defaultValues = getDefaultValueObject(
    fieldsInput
  ) as DefaultValues<TFieldValues>;
  const methods = useForm<TFieldValues>({
    resolver: resolver,
    defaultValues: defaultValues,
  });

  const formValues = methods.watch(); // Get current form values

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={classes?.formContainer}
      >
        {fieldsInput.map((field, index) => {
          const updatedField = evaluateConditions(formValues, field);

          if (updatedField?.hide) return null;

          return (
            <DynamicInput
              key={index}
              inputType={updatedField.inputType}
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

export default GenericForm;
