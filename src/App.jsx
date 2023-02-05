import Globalstyles from "./components/Globalstyles";
import AuthProvider from "./context/AuthProvider";
import Router from "./Router";

const App = () => {
  return (
    <AuthProvider>
      <Router />
      <Globalstyles />
    </AuthProvider>
  );
};

export default App;
