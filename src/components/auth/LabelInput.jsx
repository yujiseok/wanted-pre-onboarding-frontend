import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";

const LabelInput = ({
  label,
  placeholder,
  type,
  id,
  user,
  setUser,
  handleFocus,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        placeholder={placeholder}
        type={type}
        user={user}
        handleFocus={handleFocus}
        setUser={setUser}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

export default LabelInput;
