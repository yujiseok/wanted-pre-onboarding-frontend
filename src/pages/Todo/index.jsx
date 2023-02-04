import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createTodo } from "../../api";
import Button from "../../components/common/Button";
import Heading from "../../components/common/Heading";

import Lists from "../../components/todo/Lists";
import { authContext, AUTH_ACTION } from "../../context/AuthProvider";
import { todoContext, TODO_ACTION_TYPE } from "../../context/TodoProvider";

const Todo = () => {
  const { dispatch } = useContext(todoContext);
  const { state, dispatch: authDispatch } = useContext(authContext);
  const [todoTitle, setTodoTitle] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await createTodo(todoTitle);
    if (res.status === 201) {
      dispatch({ type: TODO_ACTION_TYPE.POST, todo: res.data });
      setTodoTitle("");
      // inputRef.current.focus();
    }
  };

  const handleClick = () => {
    authDispatch({
      type: AUTH_ACTION.RESET_TOKEN,
    });
  };

  useEffect(() => {
    if (!state.token) {
      navigate("/");
    }
  }, [state]);

  return (
    <div>
      <Header>
        <Heading title="Todo ✔️" />
        <Button type="button" onClick={handleClick}>
          로그아웃
        </Button>
      </Header>
      <Lists />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={todoTitle}
          autoFocus
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="할 일을 입력해 주세요."
          data-testid="new-todo-input"
        />
        <Button
          type="submit"
          disabled={todoTitle.length < 1}
          data-testid="new-todo-add-button"
        >
          <span>제출</span>
        </Button>
      </Form>
    </div>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  gap: 16px;
  padding-top: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  color: #6b7280;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  font-size: 16px;
`;

export default Todo;
