import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  border: solid 1px black;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  background-color: black;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: white;
  }
`;
