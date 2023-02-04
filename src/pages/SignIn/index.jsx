import styled from "styled-components";
import AuthForm from "../../components/auth/AuthForm";
import Heading from "../../components/common/Heading";

const SignIn = () => {
  return (
    <>
      <Header>
        <Heading title="로그인" />
      </Header>
      <AuthForm mode="signin" />
    </>
  );
};
const Header = styled.header`
  margin-bottom: 20px;
`;

export default SignIn;
