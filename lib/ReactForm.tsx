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
  validation?: Resolver<TFieldValues>; // Resolver from react-hook-form
  classes?: Record<string, string>; // Object for CSS classes
  defaultValues?: DefaultValues<TFieldValues>;
}

const ReactForm = <TFieldValues extends FieldValues>({
  fields,
  onSubmit,
  validation,
  classes,
  defaultValues: initialValues = {} as DefaultValues<TFieldValues>,
}: ReactFormProps<TFieldValues>): React.ReactNode => {
  const defaultValues = {
    ...(getDefaultValueObject(fields) as DefaultValues<TFieldValues>),
    ...initialValues,
  };
  const methods = useForm<TFieldValues>({
    resolver: validation,
    defaultValues: defaultValues,
  });

  const formValues = methods.watch(); // Get current form values

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={`rf--form ${classes?.formContainer ?? ""}`}
      >
        {fields.map((field, index) => {
          const {
            type,
            hide = false,
            ...rest
          } = evaluateConditions(formValues, field);
          const dynamicInputType = type;

          if (hide) return null;

          return <DynamicInput key={index} {...rest} type={dynamicInputType} />;
        })}
        <button
          type="submit"
          className={`rf-submit ${classes?.submitButton ?? ""}`}
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default ReactForm;
