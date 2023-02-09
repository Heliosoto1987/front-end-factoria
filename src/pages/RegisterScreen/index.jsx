import { useNavigate } from "react-router-dom";
import { BoxAuthContainer } from "../../components/BoxAuthContainer";
import { CustomButton } from "../../components/CustomButton";
import { useHandleRegister } from "./hook/useHandleRegister";
import { RegisterContainer } from "./styles";

export const RegisterScreen = () => {
  const [handleInputChange, handleAuthRegister, email, password, name] =
    useHandleRegister(
      "https://backend-factoria-production.up.railway.app/api/auth/new"
    );

  const navigate = useNavigate();

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
      <CustomButton onClick={handleAuthRegister}>Register</CustomButton>;
      <CustomButton onClick={() => navigate("/home", { replace: true })}>
        Go Home
      </CustomButton>
    </RegisterContainer>
  );
};
