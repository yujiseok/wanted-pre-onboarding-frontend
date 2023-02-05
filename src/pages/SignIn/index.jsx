import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthForm from "../../components/auth/AuthForm";
import Heading from "../../components/common/Heading";
import { authContext } from "../../context/AuthProvider";

const SignIn = () => {
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
