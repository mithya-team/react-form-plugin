# React Dynamic Form Library

A flexible and dynamic form library for React, featuring a generic form component capable of rendering various input types, including custom dynamic inputs. Built with accessibility and extensibility in mind.

## Features

- **Dynamic Form Fields**: Render various input types based on provided configurations.
- **Custom Input Types**: Easily extend with custom input types.
- **Form State Management**: Integrated with `react-hook-form` for robust form state management and validation.
- **Accessibility**: Inputs come with basic ARIA attributes and can be further customized for accessibility.
- **Controlled Components**: Manage and manipulate form inputs dynamically from parent components.

## Installation

Install the package using npm or yarn:

```bash
npm install @mithya-team/react-form-plugin
```

or

```bash
yarn add @mithya-team/react-form-plugin
```

## Usage

Integrating and utilizing the `ReactForm` component in your React application is straightforward. Follow these steps to render and manage forms dynamically.

### Basic Form Setup

Here's a basic example to get you started:

```tsx
import React from "react";
import { ReactForm } from "@mithya-team/react-form-plugin";

const MyForm = () => {
  const fieldsInput = [
    { type: "text", name: "name", label: "Name" },
    // ...add other field configurations
  ];

  const onSubmit = (data) => {
    // Handle form submission data
    console.log(data);
  };

  return <ReactForm fieldsInput={fieldsInput} onSubmit={onSubmit} />;
};

export default MyForm;
```

### Validation

Example showing validation with zod

```tsx
import React, { useState } from "react";
import { FieldInput, ReactForm } from "@mithya-team/react-form-plugin";
// import validation library
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  emailId: z.string().email("Invalid email format").min(1, "Email is required"),
  gender: z.enum(["male", "female", "trans"], {
    required_error: "Gender is required",
  }),
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  { type: "text", name: "name", label: "Name", defaultValue: "Ram" },
  { type: "email", name: "emailId", label: "Email ID" },
  {
    type: "radio",
    name: "gender",
    label: "Gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "trans", label: "Transgender" },
    ],
  },
];

const UserDetailsForm: React.FC = () => {
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <ReactForm
        fieldsInput={fieldsInput}
        onSubmit={onSubmit}
        resolver={zodResolver(schema)}
      />
      <button onClick={logFormValues}>Log Form Values</button>
    </div>
  );
};

export default UserDetailsForm;
```

### Conditional Update

Use conditions to update the field props

```tsx
import React from "react";
import { FieldInput, ReactForm } from "@mithya-team/react-form-plugin";

// Define the form fields
const fieldsInput: FieldInput[] = [
  {
    type: "radio",
    name: "gender",
    label: "Gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "trans", label: "Transgender" },
    ],
  },
  {
    type: "select",
    name: "favouritePokemon",
    label: "Favourite Pokemon",
    options: [
      { value: "pik", label: "Pikachu" },
      { value: "char", label: "Charmander" },
      { value: "saiduck", label: "Saiduck" },
    ],
    inputProps: { disabled: true },
    conditions: [
      {
        when: (formValues) => {
          return formValues["gender"] === "male";
        },
        then: () => {
          return { inputProps: { disabled: false } };
        },
      },
    ],
  },
];

const UserDetailsForm: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <ReactForm fields={fieldsInput} onSubmit={onSubmit} />
    </div>
  );
};

export default UserDetailsForm;
```

### Extending Custom Input Types

Let's take a cue from OtpInput

Step 1: Create a custom Input Type

```tsx
import React, { useEffect, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorField } from "@mithya-team/react-form-plugin";
import { OtpInputProps } from "../../@types";
import "../index.css";

export interface MyCustomFieldProps {
  name: string; // name is required
  label?: string;
  classes?: {
    root?: string;
    // other classes for styling goes here
  };
  inputProps?: IInputProps;
  defaultValue?: string;
}

const MyCustomField: React.FC<MyCustomFieldProps> = ({
  name,
  length,
  classes,
  label,
  inputProps,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const inputRef = useRef<(HTMLInputElement | null)>(null);


  const id = `form-${name}`;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={ ({ field: { onChange, onBlur, value = "" } }) => (

          // Render React Component here

        )}
      />
      <ErrorField
        id={`${id}-error`}
        className={classes?.error}
        error={errors?.[name]}
      />
    </>
  );
};

export default MyCustomField;
```

Step 2: Add custom input types by extending the input component map:

```tsx
import { addtype } from "@mithya-team/react-form-plugin";
import type { FormFields } from "@mithya-team/react-form-plugin";
import MyCustomField from "./MyCustomInput";

// Extend the type
type ExtendedFormFields =
  | FormFields
  | Field<"my-custom-field", MyCustomFieldProps>;

addtype("my-custom-field", MyCustomField);
```

Step 3: Usage in ReactForm

```tsx

// Define the form fields
const fieldsInput: ExtendedFormFields[] = [
  {
    type: "radio",
    name: "gender",
    label: "Gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "trans", label: "Transgender" },
    ],
  },
  // use here, it should support typescript intellisense
  {
    type: "my-custom-field",
    name: "CustomField",
    // other custom field props
  }

```

## API Reference

Below is the API reference for the ReactForm component and its associated input types.

### ReactForm

A flexible and dynamic form component that renders based on provided field configurations.

#### Props

- fieldsInput: Array of field configuration objects
- onSubmit: Function to handle form submission.
- onGetValues: Function to expose the getValues method from react-hook-form
- classes: CSS Classes for styling
- resolver: Use any validation library supported by `react-hook-form`

### Field Configuration

Defines how each field in the form should be rendered and behave.

#### Properties

- type: Defines the type of input (e.g., 'text', 'checkbox', 'radio').
- name: A unique identifier for the form field.
  label (optional): Display label for the form field.

Additional properties for validation, aria attributes, and other custom behaviors.

### TextField config example

```tsx
import { FieldInput } from "../../lib";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(6, "Address is required"),
  emailId: z.string().email("Invalid email format").min(1, "Email is required"),
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  {
    type: "text",
    name: "name",
    label: "Name",
    defaultValue: "Ram",
    inputProps: {
      disabled: true,
    },
  },
  {
    type: "text",
    name: "address",
    label: "Address",
    defaultValue: "8, Dasrath Palace, Ayodhya",
  },
  { type: "email", name: "emailId", label: "Email ID" },
];
```

#### Props

```tsx
type BasicInputProps = {
  type: `${BasicInputType}`;
  name: string;
  label?: string;
  classes?: {
    container?: string;
    inputContainer?: string;
    label?: string;
    input?: string;
    error?: string;
  };
  inputProps?: IInputProps;
  defaultValue?: string;
};

interface IInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>,
    "type"
  > {
  startAdornment?: ReactElement;
  endAdornment?: ReactElement;
}
```

#### Styling

```tsx
  const classes = {
    container?: string; // rf--basic-input-root
    inputContainer?: string; // rf--input-container
    label?: string; // rf--label
    input?: string; // rf--input
    error?: string; // rf--error
    endAdornment?: string; // rf--start-adornment
    startAdornment?: string; // rf--end-adornment
  };

```

### Checkbox config example

```tsx
import { FieldInput } from "../../lib";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  favouriteDish: z
    .array(z.string())
    .nonempty("Select at least one favourite dish")
    .optional(), // mark the field as optional if conditional rendering is applied
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  {
    type: "checkbox",
    name: "favouriteDish",
    label: "Favourite Dish",
    options: [
      { value: "rice", label: "Rice" },
      { value: "pizza", label: "Pizza" },
      { value: "burger", label: "Burger" },
    ],
    defaultValue: ["rice"],
  },
];
```

#### Props

```tsx
type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

interface CheckboxInputProps {
  type: "checkbox";
  name: string;
  options: Option[];
  label?: string;
  classes?: {
    root?: string;
    container?: string;
    checkbox?: string;
    label?: string;
    error?: string;
  };
  inputProps?: IInputProps;
  defaultValue?: Option["value"][];
}
```

#### Styling

```tsx
const classes = {
    root?: string; // rf--checkbox-root
    container?: string; // rf--checkbox-container
    checkbox?: string; // rf--checkbox-input
    label?: string; // rf--label
    error?: string; // rf--error
  };
```

### select config example

```tsx
import { FieldInput } from "../../lib";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  favouritePokemon: z
    .enum(["pik", "char", "saiduck"], {
      required_error: "Pokemons is required",
    })
    .optional(), // mark the field as optional if conditional rendering is applied
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  {
    type: "select",
    name: "favouritePokemon",
    label: "Favourite Pokemon",
    options: [
      { value: "pik", label: "Pikachu" },
      { value: "char", label: "Charmander" },
      { value: "saiduck", label: "Saiduck" },
    ],
  },
];
```

#### Props

```tsx
interface SelectInputProps {
  type: "select";
  name: string;
  options: Option[];
  label?: string;
  classes?: {
    root?: string;
    container?: string;
    select?: string;
    label?: string;
    option?: string;
    error?: string;
  };
  inputProps?: IInputProps;
  defaultValue?: Option["value"];
}
```

#### Styling

```tsx
const classes = {
    root?: string; // rf--select-root
    select?: string; // rf--select-input
    label?: string; // rf--label
    option?: string; // rf--label rf--select-label
    error?: string; // rf--error
  };
```

### Radio config example

```tsx
import { FieldInput } from "../../lib";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  gender: z.enum(["male", "female", "trans"], {
    required_error: "Gender is required",
  }),
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  {
    type: "radio",
    name: "gender",
    label: "Gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "trans", label: "Transgender" },
    ],
  },
];
```

#### Props

```tsx
interface RadioInputProps {
  type: "radio";
  name: string;
  options: Option[];
  label?: string;
  classes?: {
    root?: string;
    container?: string;
    radio?: string;
    label?: string;
    error?: string;
    rootLabel?: string;
  };
  inputProps?: IInputProps;
  defaultValue?: Option["value"];
}
```

#### Styling

```tsx
const classes = {
    root?: string; // rf--radio-root
    container?: string; // rf--radio-container
    radio?: string; // rf--radio-input
    label?: string; // rf-label rf--radio-label
    error?: string; // rf--error
    rootLabel?: string; // rf--label
  };
```

### switch config example

```tsx
import { FieldInput } from "../../lib";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  preferredTheme: z.boolean({ invalid_type_error: "value should be boolean" }),
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  {
    type: "switch",
    name: "preferredTheme",
    label: "Dark Theme",
    defaultValue: true,
  },
];
```

#### Props

```tsx
interface SwitchInputProps {
  type: "switch";
  name: string;
  label?: string;
  classes?: {
    switchContainer?: string;
    label?: string;
    switch?: string;
    button?: string;
    input?: string;
    activeSwitch?: string;
    activeButton?: string;
  };
  inputProps?: IInputProps;
  defaultValue?: boolean;
}
```

#### Styling

```tsx
const classes = {
    switchContainer?: string; // rf--switch-root
    label?: string; // rf--switch-label rf--label
    switch?: string; // rf--label rf--switch
    button?: string; // rf--switch-button
    input?: string; // rf--switch-input
    activeSwitch?: string;
    activeButton?: string;
  };
```

### File config example

```tsx
import { FieldInput } from "../../lib";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  file: z.any().refine((files) => files?.length == 1, "Image is required."),
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  {
    type: "file",
    name: "file",
    label: "file",
  },
];
```

#### Props

Same as BasicInput

#### Styling

Same as BasicInput

### date and time config example

```tsx
import { FieldInput } from "../../lib";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  time: z.string(),
  date: z.string(),
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  {
    type: "time",
    name: "time",
    label: "Time",
    defaultValue: true,
  },

  {
    type: "date",
    name: "date",
    label: "Date",
    defaultValue: true,
  },
];
```

#### Props

Same as BasicInput

#### Styling

Same as BasicInput

### Otp config example

```tsx
import { FieldInput } from "../../lib";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  phoneOtp: z.string(),
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  {
    type: "otp",
    name: "phoneOtp",
    length: 6,
  },
];
```

#### Props

```tsx
interface OtpInputProps {
  type: "otp";
  name: string;
  length: number;
  label?: string;
  classes?: {
    root?: string;
    input?: string;
    error?: string;
    label?: string;
    inputContainer?: string;
  };
  inputProps?: IInputProps;
  defaultValue?: string;
}
```

#### Styling

```tsx
const classes = {
    root?: string; // rf--otp-root
    input?: string; // rf--input rf--otp-input
    error?: string; // rf--error
    label?: string; // rf--label
    inputContainer?: string; // rf--otp-input-container
  };
```

### phone number config example

```tsx
import { FieldInput } from "../../lib";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  countryPhoneNumber: z.string(),
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  {
    type: "country-phone-number",
    name: "countryPhoneNumber",
  },
];
```

#### Props

```tsx
interface CountryPhoneNumberInputProps {
  type: "country-phone-number";
  name: string;
  classes?: {
    root?: string;
    select?: string;
    input?: string;
    inputWrapper?: string;
    selectWrapper?: string;
    error?: string;
    label?: string;
  };
  label?: string;
  inputProps?: IInputProps;
  selectProps?: IInputProps;
  defaultValue?: string;
}
```

#### Styling

```tsx
const classes = {
    root?: string; // rf--phone-number-root
    select?: string; // rf--phone-number-country-select
    input?: string; // rf--input rf--phone-number-input
    inputWrapper?: string; // rf--phone-number-input-wrapper
    selectWrapper?: string; // rf--phone-number-country-select-wrapper
    error?: string; // rf--error
    label?: string; // rf--label
  };
```

### plain text config example

```tsx
// Define the form fields
const fieldsInput: FieldInput[] = [
  {
    type: "plainText",
    name: "plainHelperText",
    text: "This is helper text.",
  },
];
```

#### Props

```tsx
interface PlainTextProps {
  type: "plainText";
  name: string;
  text?: string | JSX.Element;
  className?: string;
}
```

#### Styling

```tsx
className?: string; // rf--plain-text
```

## Issues and Pull Requests

Contributions are always welcome! If you encounter any issues or would like to contribute, please file an issue or submit a PR:

Issues: GitHub Issues
Pull Requests: GitHub Pull Requests
