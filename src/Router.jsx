import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
