import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
  font-size: 2rem;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TitleNavbar = styled.div`
  color: white;
  font-size: 2rem;
  @media (max-width: 400px) {
    font-size: 0.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonNavbar = styled.button`
  color: white;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  background-color: black;
  @media (max-width: 400px) {
    font-size: 0.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
