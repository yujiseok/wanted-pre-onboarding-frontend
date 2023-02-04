import { client } from "./core/api";

// auth api
export const signUp = async (user) => {
  return client.post("/auth/signup", { ...user });
};

export const signIn = async (user) => {
  return client.post("/auth/signin", { ...user });
};

// todo api
export const getTodos = async () => {
  return client("/todos");
};

export const createTodo = async (todo) => {
  return client.post("/todos", { todo });
};

export const updateTodo = async (id, todo, isCompleted) => {
  return client.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodo = async (id) => {
  return client.delete(`/todos/${id}`);
};
