import { BoxAuthContainer } from "../../components/BoxAuthContainer";
import { CustomButton } from "../../components/CustomButton";
import { useHandleLogin } from "./hook/useHandleLogin";
import { LoginContainer } from "./styles";

export const LoginScreen = () => {
  const [handleInputChange, handleAuthLogin, email, password] = useHandleLogin(
    "https://backend-factoria-production.up.railway.app/api/auth/"
  );

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
      <CustomButton onClick={handleAuthLogin}>Login</CustomButton>;
      <CustomButton onClick={() => navigate("/register")}>
        If you no have acc please create new account
      </CustomButton>
    </LoginContainer>
  );
};
