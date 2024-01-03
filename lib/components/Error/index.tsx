import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import "../index.css";

export interface IErrorProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  id: string;
  className?: string;
}

const ErrorField: React.FC<IErrorProps> = ({ error, id, className }) => {
  const message =
    typeof error === "string" ? error : (error as FieldError)?.message;

  if (!message) return null;

  return (
    <span id={id} className={`rf--error ${className || ""}`}>
      {message}
    </span>
  );
};

export default ErrorField;
