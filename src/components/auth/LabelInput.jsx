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
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <Wrapper>
      <Label focused={focused} htmlFor={id}>
        {label}
      </Label>
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
  color: ${(props) => (props.focused ? "pink" : "black")};
  font-size: 18px;
  font-weight: 600;
`;

export default LabelInput;
