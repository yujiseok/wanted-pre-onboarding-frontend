import styled from "styled-components";
import ActionLink from "./ActionLink";
import Button from "./Button";
import LabelInput from "./LabelInput";

const authDescription = {
  signin: {
    emailPlaceholder: "이메일을 입력하세요.",
    passwordPlaceholder: "비밀번호를 입력하세요.",
    buttonText: "로그인",
    actionText: "회원가입",
    question: "계정이 없으신가요?",
    actionLink: "/signup",
  },
  signup: {
    emailPlaceholder: "@를 포함한 이메일을 입력하세요.",
    passwordPlaceholder: "8자 이상 입력하세요",
    buttonText: "회원가입",
    actionText: "로그인",
    question: "계정이 이미 있으신가요?",
    actionLink: "/",
  },
};

const AuthForm = ({ mode }) => {
  const {
    emailPlaceholder,
    passwordPlaceholder,
    buttonText,
    actionText,
    question,
    actionLink,
  } = authDescription[mode];

  return (
    <Form>
      <InputWrapper>
        <LabelInput type="text" label="이메일" placeholder={emailPlaceholder} />
        <LabelInput
          type="password"
          label="비밀번호"
          placeholder={passwordPlaceholder}
        />
      </InputWrapper>
      <ActionWrapper>
        <Button>{buttonText}</Button>
        <ActionLink question={question} to={actionLink} text={actionText} />
      </ActionWrapper>
    </Form>
  );
};

const Form = styled.form``;

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

export default AuthForm;
