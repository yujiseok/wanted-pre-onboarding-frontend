import { createContext, useMemo, useReducer } from "react";

export const todoContext = createContext();

export const TODO_ACTION_TYPE = {
  GET: "GET",
  POST: "POST",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  COMPLETE: "COMPLETE",
};

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPE.GET:
      return [...action.todo];
    case TODO_ACTION_TYPE.POST:
      return [...state, action.todo];
    case TODO_ACTION_TYPE.UPDATE:
      return state.map((todo) =>
        todo.id === action.id ? { ...action.todo } : todo,
      );
    case TODO_ACTION_TYPE.COMPLETE:
      return state.map((todo) => {
        return todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });
    case TODO_ACTION_TYPE.DELETE:
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(
    () => ({
      todos,
      dispatch,
    }),
    [todos, dispatch],
  );

  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
};
export default TodoProvider;
