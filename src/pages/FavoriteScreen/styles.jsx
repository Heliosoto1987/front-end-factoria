import styled from "styled-components";

export const FavoriteContainer = styled.div`
  background-image: linear-gradient(to bottom, #ff4242, #00ccff);
  gap: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: black 5px 5px 5px;
`;

export const FavoriteInput = styled.input`
  padding: 2rem;
  font-size: 1.5rem;
`;

export const ImagesContainer = styled.div`
  gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
export const FavoriteBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 1rem;
`;

export const ButtonUploadImg = styled.div`
  border: solid black 2px;
  cursor: pointer;
  background-color: white;
  padding: 1rem;
  font-weight: bolder;
`;
