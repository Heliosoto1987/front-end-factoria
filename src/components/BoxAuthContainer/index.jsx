import React from "react";
import { BoxAuth, StyledInput, TitleBox, LabelStyled } from "./styles";

export const BoxAuthContainer = ({
  title,
  name,
  email,
  password,
  valuePassword,
  valueEmail,
  handleInputChange,
  valueName,
}) => {
  return (
    <BoxAuth>
      <TitleBox>{title}</TitleBox>
      {name && (
        <>
          <LabelStyled>
            {name}
            <StyledInput
              name="name"
              type="text"
              placeholder={name}
              value={valueName}
              onChange={handleInputChange}
            />
          </LabelStyled>
        </>
      )}
      <LabelStyled>
        {email}
        <StyledInput
          type="text"
          placeholder={email}
          name="email"
          value={valueEmail}
          onChange={handleInputChange}
        />
      </LabelStyled>
      <LabelStyled>
        {password}
        <StyledInput
          name="password"
          type="text"
          placeholder={password}
          value={valuePassword}
          onChange={handleInputChange}
        />
      </LabelStyled>
    </BoxAuth>
  );
};
