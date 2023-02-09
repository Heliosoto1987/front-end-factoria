import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { CustomLink } from "../CustomLink";
import { FlexColumContainer } from "../FlexColumContainer";
import { FlexRow } from "../FlexRowContainer/styles";
import { ButtonNavbar, NavbarContainer, TitleNavbar } from "./styles";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useContext(UserContext);
  useEffect(() => {
    !loginData.uid && navigate("home", { replace: true });
  }, [loginData]);

  return (
    <NavbarContainer>
      <TitleNavbar>
        {!location.pathname.includes("favorite")
          ? "Welcome to my save cloud images"
          : `Welcome: ${loginData.name}`}
      </TitleNavbar>
      <FlexRow>
        {" "}
        <CustomLink to="/home">Home</CustomLink>
        {!location.pathname.includes("favorite") ? (
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
      </FlexRow>
    </NavbarContainer>
  );
};
