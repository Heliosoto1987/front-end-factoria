import { CustomLink } from "../CustomLink";
import { FlexColumContainer } from "../FlexColumContainer";
import { NavbarContainer, TitleNavbar } from "./styles";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <FlexColumContainer>
        <TitleNavbar>Welcome to my favorite image</TitleNavbar>
      </FlexColumContainer>
      <CustomLink to="/home">Home</CustomLink>
      <CustomLink to="/login">Login</CustomLink>
      <CustomLink to="/register">Register</CustomLink>
    </NavbarContainer>
  );
};
