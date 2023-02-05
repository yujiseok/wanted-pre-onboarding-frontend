import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthForm from "../../components/auth/AuthForm";
import Heading from "../../components/common/Heading";
import { authContext } from "../../context/AuthProvider";

const SignUp = () => {
  const {
    state: { token },
  } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/todo");
    }
  }, [token]);
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
