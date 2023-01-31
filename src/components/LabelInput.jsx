import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";

const LabelInput = ({ label, placeholder, type }) => {
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <Wrapper>
      <Label focused={focused} htmlFor={type}>
        {label}
      </Label>
      <Input
        id={type}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
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
  color: ${(props) => (props.focused ? "pink" : "black")};
  font-size: 18px;
  font-weight: 600;
`;

export default LabelInput;
