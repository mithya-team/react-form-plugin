import React, { useState } from "react";
import { FieldInput, GenericForm } from "../../lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the validation schema using Zod
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(6, "Address is required"),
  emailId: z.string().email("Invalid email format").min(1, "Email is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  mobileNumber: z.string().min(1, "Mobile number is required"),
  gender: z.enum(["male", "female", "trans"], {
    required_error: "Gender is required",
  }),
  favouriteDish: z
    .array(z.string())
    .nonempty("Select at least one favourite dish"),
  favouritePokemon: z.enum(["pik", "char", "saiduck"], {
    required_error: "Pokemons is required",
  }),
  preferredTheme: z.boolean({ invalid_type_error: "value should be boolean" }),
});

// Define the form fields
const fieldsInput: FieldInput[] = [
  { inputType: "text", name: "name", label: "Name", defaultValue: "Ram" },
  {
    inputType: "text",
    name: "address",
    label: "Address",
    defaultValue: "8, Dasrath Palace, Ayodhya",
  },
  { inputType: "email", name: "emailId", label: "Email ID" },
  { inputType: "mobile", name: "mobileNumber", label: "Mobile Number" },
  { inputType: "tel", name: "phoneNumber", label: "Phone Number" },
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
  {
    inputType: "checkbox",
    name: "favouriteDish",
    label: "Favourite Dish",
    options: [
      { value: "rice", label: "Rice" },
      { value: "pizza", label: "Pizza" },
      { value: "burger", label: "Burger" },
    ],
  },
  {
    inputType: "select",
    name: "favouritePokemon",
    label: "Favourite Pokemon",
    options: [
      { value: "pik", label: "Pikachu" },
      { value: "char", label: "Charmander" },
      { value: "saiduck", label: "Saiduck" },
    ],
  },
  {
    inputType: "switch",
    name: "preferredTheme",
    label: "Dark Theme",
    defaultValue: true,
  },
];

// UserDetailsForm Component
const UserDetailsForm: React.FC = () => {
  const [getFormValues, setGetFormValues] = useState<() => object>(
    () => () => ({})
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.log(data);

  const handleGetValues = (getValuesFunction: () => object) => {
    setGetFormValues(() => getValuesFunction);
  };

  const logFormValues = () => {
    console.log("form value ", getFormValues()); // use getValues in the parent component
  };

  return (
    <div>
      <GenericForm
        fieldsInput={fieldsInput}
        onSubmit={onSubmit}
        resolver={zodResolver(schema)}
        onGetValues={handleGetValues}
      />
      <button onClick={logFormValues}>Log Form Values</button>
    </div>
  );
};

export default UserDetailsForm;
