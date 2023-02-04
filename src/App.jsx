import Globalstyles from "./components/Globalstyles";
import AuthProvider from "./context/AuthProvider";
import TodoProvider from "./context/TodoProvider";
import Router from "./Router";

const App = () => {
  return (
    <AuthProvider>
      <TodoProvider>
        <Router />
        <Globalstyles />
      </TodoProvider>
    </AuthProvider>
  );
};

export default App;
