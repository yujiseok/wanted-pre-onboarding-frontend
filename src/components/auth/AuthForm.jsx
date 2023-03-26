import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signIn, signUp } from "../../api";
import { authDescription } from "../../constant/formDescription";
import { authContext, AUTH_ACTION } from "../../context/AuthProvider";
import Button from "../common/Button";
import ActionLink from "./ActionLink";
import LabelInput from "./LabelInput";

const AuthForm = ({ mode }) => {
  const {
    emailPlaceholder,
    passwordPlaceholder,
    buttonText,
    actionText,
    question,
    actionLink,
  } = authDescription[mode];
  const { dispatch } = useContext(authContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const handleFocus = (e) => {
    const { name } = e.target;
    setFocus({
      ...focus,
      [name]: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "signin") {
      try {
        const res = await signIn(user);

        if (res.status === 200) {
          dispatch({
            type: AUTH_ACTION.SET_TOKEN,
            token: res.data.access_token,
          });
          setUser({ email: "", password: "" });
          navigate("/todo");
        }
      } catch (error) {
        alert("이메일 또는 비밀번호를 확인하세요.");
      }
    }

    if (mode === "signup") {
      try {
        const res = await signUp(user);

        if (res.status === 201) {
          setUser({ email: "", password: "" });
          navigate("/signin");
        }
      } catch (error) {
        alert("이미 존재하는 사용자입니다.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <LabelInput
          type="text"
          id="email"
          label="이메일"
          placeholder={emailPlaceholder}
          user={user}
          setUser={setUser}
          handleFocus={handleFocus}
        />
        {!user.email.includes("@") && focus.email ? (
          <ErrorMessage>@를 포함한 이메일을 입력하세요.</ErrorMessage>
        ) : null}

        <LabelInput
          type="password"
          id="password"
          label="비밀번호"
          placeholder={passwordPlaceholder}
          user={user}
          setUser={setUser}
          handleFocus={handleFocus}
        />
        {user.password.length < 8 && focus.password ? (
          <ErrorMessage>8자 이상의 비밀번호를 입력하세요.</ErrorMessage>
        ) : null}
      </InputWrapper>
      <ActionWrapper>
        <Button
          type="submit"
          disabled={!user.email.includes("@") || user.password.length < 7}
          data-testid={`${mode}-button`}
        >
          {buttonText}
        </Button>
        <ActionLink question={question} to={actionLink} text={actionText} />
      </ActionWrapper>
    </form>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ActionWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  align-items: center;
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 14px;
`;

export default AuthForm;
