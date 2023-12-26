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
npm install git+https://github.com/mithya-team/react-form-plugin.git
```

or

```bash
yarn add git+https://github.com/mithya-team/react-form-plugin.git
```

## Usage

Integrating and utilizing the `GenericForm` component in your React application is straightforward. Follow these steps to render and manage forms dynamically.

### Basic Form Setup

Here's a basic example to get you started:

```tsx
import React from "react";
import { GenericForm } from "react-form-plugin";

const MyForm = () => {
  const fieldsInput = [
    { inputType: "text", name: "name", label: "Name" },
    // ...add other field configurations
  ];

  const onSubmit = (data) => {
    // Handle form submission data
    console.log(data);
  };

  return <GenericForm fieldsInput={fieldsInput} onSubmit={onSubmit} />;
};

export default MyForm;
```

## API Reference

Below is the API reference for the GenericForm component and its associated input types.

### GenericForm

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

- inputType: Defines the type of input (e.g., 'text', 'checkbox', 'radio').
- name: A unique identifier for the form field.
  label (optional): Display label for the form field.

Additional properties for validation, aria attributes, and other custom behaviors.

### Extending Custom Input Types

Add custom input types by extending the input component map:

```tsx
import { addInputType } from "react-form-plugin";
import MyCustomInput from "./MyCustomInput";

addInputType("myCustom", MyCustomInput);
```

### Resolver Demo

Example showing validation with zod

```tsx
import React, { useState } from "react";
import { FieldInput, GenericForm } from "../../lib";
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
  { inputType: "text", name: "name", label: "Name", defaultValue: "Ram" },
  { inputType: "email", name: "emailId", label: "Email ID" },
  {
    inputType: "radio",
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
      <GenericForm
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
