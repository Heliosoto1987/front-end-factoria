import { useNavigate } from "react-router-dom";
import { BoxAuthContainer } from "../../components/BoxAuthContainer";
import { CustomButton } from "../../components/CustomButton";
import { useForm } from "../../hooks/useForm";
import { LoginContainer } from "./styles";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;
  console.log(email);

  return (
    <LoginContainer>
      <BoxAuthContainer
        title={"Login"}
        email="Email"
        password="Password"
        handleInputChange={handleInputChange}
        valueEmail={email}
        valuePassword={password}
      />
      ;
      <CustomButton onClick={() => navigate("/home")}>
        If you no have acc please create new account
      </CustomButton>
    </LoginContainer>
  );
};
