import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import TodoProvider from "./context/TodoProvider";
import Root from "./pages/Root";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Root />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="todo"
            element={
              <TodoProvider>
                <Todo />
              </TodoProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
