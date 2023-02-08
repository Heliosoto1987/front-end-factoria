import React from "react";
import { BoxAuthContainer } from "../../components/BoxAuthContainer";
import { useForm } from "../../hooks/useForm";
import { RegisterContainer } from "./styles";

export const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
    name: "",
  });
  const { email, password, name } = formValues;

  return (
    <RegisterContainer>
      <BoxAuthContainer
        title={"Register"}
        name="Name"
        email="Email"
        password="Password"
        valueName={name}
        valueEmail={email}
        valuePassword={password}
        handleInputChange={handleInputChange}
      />
    </RegisterContainer>
  );
};
