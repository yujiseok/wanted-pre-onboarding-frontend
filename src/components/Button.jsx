import styled from "styled-components";

const Button = ({ ...rest }) => {
  return <StyledButton type="submit" {...rest} />;
};

const StyledButton = styled.button`
  /* background-color: #ff9494; */
  background-color: transparent;
  border-radius: 4px;
  border: none;
  padding: 4px 8px;
  /* color: white; */
  font-size: 16px;
  font-weight: 600;
`;
export default Button;
