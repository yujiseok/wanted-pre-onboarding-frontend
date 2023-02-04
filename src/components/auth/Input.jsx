import styled from "styled-components";

const Input = ({ type, placeholder, id, user, setUser, handleFocus }) => {
  const onChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <StyledInput
      type={type}
      id={id}
      placeholder={placeholder}
      // onFocus={onFocus}
      onFocus={handleFocus}
      name={id}
      onChange={onChange}
      value={user[id]}
      data-testid={`${id}-input`}
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
