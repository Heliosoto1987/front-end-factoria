import { StyledButton } from "./styles";

export const CustomButton = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
