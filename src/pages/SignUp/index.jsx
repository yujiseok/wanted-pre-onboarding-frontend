import AuthForm from "../../components/AuthForm";
import Heading from "../../components/Heading";

const SignUp = () => {
  return (
    <>
      <Heading title="회원가입" />
      <AuthForm mode="signup" />
    </>
  );
};

export default SignUp;
