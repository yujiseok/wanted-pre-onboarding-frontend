import styled from "styled-components";

const Heading = ({ title }) => {
  return <StyledHeading>{title}</StyledHeading>;
};

const StyledHeading = styled.h2`
  margin-bottom: 16px;
`;

export default Heading;
