import styled from "styled-components";
import AuthForm from "../../components/AuthForm";
import Heading from "../../components/Heading";

const SignIn = () => {
  return (
    <>
      <Heading title="로그인" />
      <AuthForm mode="signin" />
    </>
  );
};

export default SignIn;
