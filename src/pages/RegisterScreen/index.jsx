import { BoxAuthContainer } from "../../components/BoxAuthContainer";
import { CustomButton } from "../../components/CustomButton";
import { useHandleAuth } from "../../hooks/useHandleAuth";
import { RegisterContainer } from "./styles";

export const RegisterScreen = () => {
  const [handleInputChange, handleRegister, email, password, name] =
    useHandleAuth(
      "https://backend-factoria-production.up.railway.app/api/auth/new"
    );

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
      <CustomButton onClick={handleRegister}>Register</CustomButton>;
    </RegisterContainer>
  );
};
