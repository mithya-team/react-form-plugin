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
          const {
            name,
            label,
            type,
            options = [],
            validation,
            classes,
            hide = false,
            inputProps,
            ...rest
          } = evaluateConditions(formValues, field);

          if (hide) return null;

          return (
            <DynamicInput
              key={index}
              {...rest}
              type={type}
              name={name}
              label={label}
              options={options}
              validation={validation}
              classes={classes}
              inputProps={inputProps}
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
