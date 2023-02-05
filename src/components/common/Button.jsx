import styled from "styled-components";

const Button = ({ ...rest }) => {
  return <StyledButton {...rest} />;
};

const StyledButton = styled.button`
  padding: 8px;
  border: 2px solid #fb923c;
  background-color: transparent;
  border-radius: 4px;
  color: #fb923c;
  transition: all 0.2s ease-out;
  font-size: 16px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;

  &:hover {
    background-color: #fb923c;
    color: #fff;
  }

  &:disabled {
    background-color: #e5e7eb;
    color: #9ca3af;
    border: none;
    pointer-events: none;
    border: 2px solid transparent;
  }
`;
export default Button;
