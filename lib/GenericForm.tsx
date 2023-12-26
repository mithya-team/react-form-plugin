import React, { useEffect } from "react";
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
  onGetValues,
}: GenericFormProps<TFieldValues>): React.ReactNode => {
  const defaultValues = getDefaultValueObject(
    fieldsInput
  ) as DefaultValues<TFieldValues>;
  const methods = useForm<TFieldValues>({
    resolver: resolver,
    defaultValues: defaultValues,
  });

  const { getValues } = methods;

  // Expose getValues to the parent component when component mounts or getValues changes
  useEffect(() => {
    if (onGetValues) {
      onGetValues(getValues);
    }
  }, [getValues, onGetValues]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={classes?.formContainer}
      >
        {fieldsInput.map((field, index) => (
          <DynamicInput
            key={index}
            inputType={field.inputType}
            name={field.name}
            label={field.label}
            options={field?.options}
            validation={field.validation}
            classes={classes}
          />
        ))}
        <button type="submit" className={classes?.submitButton}>
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default GenericForm;
