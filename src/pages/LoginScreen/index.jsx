import { BoxAuthContainer } from "../../components/BoxAuthContainer";
import { CustomButton } from "../../components/CustomButton";
import { useHandleAuth } from "../../hooks/useHandleAuth";
import { LoginContainer } from "./styles";

export const LoginScreen = () => {
  const [handleInputChange, handleAuth, email, password] = useHandleAuth(
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
      <CustomButton onClick={handleAuth}>Login</CustomButton>;
      <CustomButton onClick={() => navigate("/register")}>
        If you no have acc please create new account
      </CustomButton>
    </LoginContainer>
  );
};
