import { memo, useState } from "react";
import styled from "styled-components";
import { deleteTodo, updateTodo } from "../../api";
import { TODO_ACTION_TYPE } from "../../context/TodoProvider";

const List = ({ todo: { todo, id, isCompleted }, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo);

  const handleChange = (e) => setEditedTitle(e.target.value);
  const handleEditClick = () => setIsEditing((prev) => !prev);

  const handleCheckBox = async (id, title, isCompleted) => {
    const res = await updateTodo(id, title, !isCompleted);

    if (res.status === 200) {
      dispatch({
        type: TODO_ACTION_TYPE.UPDATE,
        id,
        todo: res.data,
      });
    }
  };

  const handleUpdate = async (id, title, isCompleted) => {
    try {
      const res = await updateTodo(id, title, isCompleted);

      if (res.status === 200) {
        dispatch({
          type: TODO_ACTION_TYPE.UPDATE,
          id,
          todo: res.data,
        });
      }

      setIsEditing(false);
    } catch (error) {
      alert("내용을 확인해 주세요.");
    }
  };

  const handleClickDelete = async (id) => {
    const res = await deleteTodo(id);

    if (res.status === 204) {
      dispatch({ type: TODO_ACTION_TYPE.DELETE, id });
    }
  };

  if (isEditing) {
    return (
      <TodoList>
        <div>
          <TextInput
            type="text"
            value={editedTitle}
            onChange={handleChange}
            autoFocus
          />
        </div>
        <ButtonWrapper>
          <Button
            type="button"
            onClick={() => handleUpdate(id, editedTitle, isCompleted)}
          >
            ✔️
          </Button>
          <Button type="button" onClick={handleEditClick}>
            ❌
          </Button>
        </ButtonWrapper>
      </TodoList>
    );
  }

  return (
    <TodoList>
      <CheckInputWrapper>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckBox(id, editedTitle, isCompleted)}
        />
        <TodoTitle isCompleted={isCompleted}>{todo}</TodoTitle>
      </CheckInputWrapper>
      <ButtonWrapper>
        <Button
          type="button"
          onClick={handleEditClick}
          data-testid="modify-button"
        >
          📝
        </Button>
        <Button
          type="button"
          onClick={() => handleClickDelete(id)}
          data-testid="delete-button"
        >
          ❌
        </Button>
      </ButtonWrapper>
    </TodoList>
  );
};

const TodoList = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 8px;
  padding: 8px 16px;
  margin: 0 8px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background-color: #f3f4f6;
  color: #4b5563;
  margin: 8px 0;
`;

const CheckInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input[type="checkbox"] {
    /* -webkit-appearance: none; */
    cursor: pointer;
    /* padding: 2px; */
    width: 16px;
    height: 16px;
    background-color: #fb923c;
    border: 2px solid #9ca3af;
    border-radius: 2px;
  }
`;

const TodoTitle = styled.span`
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
`;

const TextInput = styled.input`
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #9ca3af;
  color: #4b5563;
  font-size: 16px;
  width: 80%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Button = styled.button`
  padding: 8px;
  font-size: 16px;
`;

export default memo(List);
