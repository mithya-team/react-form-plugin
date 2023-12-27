import { FieldValues } from "react-hook-form";
import { FieldInput } from "../@types";

export const evaluateConditions = <TFieldValues extends FieldValues>(
  formValues: TFieldValues,
  fieldConfig: FieldInput
) => {
  const newProps = { ...fieldConfig }; // start with existing fieldProps

  fieldConfig.conditions?.forEach((condition) => {
    const currentCondition = condition.when;
    const meetsCondition =
      typeof currentCondition === "function"
        ? currentCondition(formValues)
        : false;

    if (meetsCondition) {
      Object.assign(newProps, condition.then(fieldConfig)); // merge condition effects into fieldProps
    }
  });

  return newProps; // return updated fieldProps
};
