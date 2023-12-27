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

  const isFieldVisible = <TFieldValues extends FieldValues>(
    conditionCallback: undefined | ((formValue: TFieldValues) => boolean),
    formValue: TFieldValues
  ): boolean => {
    if (!conditionCallback) return true;
    if (typeof conditionCallback !== "function") return true;
    const isVisible = conditionCallback(formValue);
    return isVisible;
  };

  const formValues = methods.watch(); // Get current form values

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={classes?.formContainer}
      >
        {fieldsInput.map((field, index) => {
          const isVisible = isFieldVisible(field.showWhen, formValues);

          if (isVisible) {
            return (
              <DynamicInput
                key={index}
                inputType={field.inputType}
                name={field.name}
                label={field.label}
                options={field?.options}
                validation={field.validation}
                classes={field?.classes}
              />
            );
          }
          return null;
        })}
        {/* {fieldsInput.map((field, index) => (
          <DynamicInput
            key={index}
            inputType={field.inputType}
            name={field.name}
            label={field.label}
            options={field?.options}
            validation={field.validation}
            classes={classes}
          />
        ))} */}
        <button type="submit" className={classes?.submitButton}>
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default GenericForm;
