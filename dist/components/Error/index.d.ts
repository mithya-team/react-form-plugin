import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
export interface IErrorProps {
    error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
    id: string;
    className?: string;
}
declare const ErrorField: React.FC<IErrorProps>;
export default ErrorField;
