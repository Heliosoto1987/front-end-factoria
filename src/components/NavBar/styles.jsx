import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #00aeff;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TitleNavbar = styled.div`
  color: black;
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
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  &:hover {
    color: #0e0eec;
  }
`;
