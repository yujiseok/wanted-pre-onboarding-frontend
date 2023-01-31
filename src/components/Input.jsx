import styled from "styled-components";

const Input = ({ type, placeholder, onFocus, onBlur }) => {
  return (
    <StyledInput
      type={type}
      id={type}
      placeholder={placeholder}
      // onFocus={onFocus}
      // onBlur={onBlur}
    />
  );
};

const StyledInput = styled.input`
  padding: 8px 4px;
  border: 1px solid #777;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #555;
  }
`;

export default Input;
