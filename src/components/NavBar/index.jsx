import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { CustomLink } from "../CustomLink";
import { FlexColumContainer } from "../FlexColumContainer";
import { ButtonNavbar, NavbarContainer, TitleNavbar } from "./styles";

export const Navbar = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useContext(UserContext);

  return (
    <NavbarContainer>
      <FlexColumContainer>
        <TitleNavbar>
          {!loginData.name
            ? "Welcome to my favorite image "
            : `Welcome: ${loginData.name}`}
        </TitleNavbar>
      </FlexColumContainer>
      <CustomLink to="/home">Home</CustomLink>
      {!loginData.name ? (
        <>
          <CustomLink to="/login">Login</CustomLink>
          <CustomLink to="/register">Register</CustomLink>
        </>
      ) : (
        <ButtonNavbar
          onClick={() => {
            setLoginData({});
            navigate("home");
          }}
        >
          Close
        </ButtonNavbar>
      )}
    </NavbarContainer>
  );
};
