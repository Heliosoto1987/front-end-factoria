import React from "react";
import { LinkStyled } from "./styles";

export const CustomLink = ({ children, to }) => {
  return <LinkStyled to={to}> {children}</LinkStyled>;
};
