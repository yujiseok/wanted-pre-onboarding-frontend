import styled from "styled-components";
import AuthForm from "../../components/auth/AuthForm";
import Heading from "../../components/common/Heading";

const SignUp = () => {
  return (
    <>
      <Header>
        <Heading title="회원가입" />
      </Header>
      <AuthForm mode="signup" />
    </>
  );
};

const Header = styled.header`
  margin-bottom: 20px;
`;

export default SignUp;
