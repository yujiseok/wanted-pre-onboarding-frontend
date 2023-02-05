import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";

const Root = () => {
  const {
    state: { token },
  } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/todo");
    }
  }, [token]);

  return token ? <Navigate to="todo" /> : <Navigate to="signin" />;
};
export default Root;
