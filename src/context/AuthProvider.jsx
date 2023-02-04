// import { createContext, useMemo, useReducer } from "react";

// export const ACTION_TYPE = {
//   SET_USER: "SET_USER",
//   SIGN_UP: "SIGN_UP",
//   SIGN_IN: "SIGN_IN",
//   SIGN_OUT: "SIGN_OUT",
//   RESET: "RESET",
// };

// export const userContext = createContext();

// const initialState = {
//   user: { email: "", password: "" },
//   token: "",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     // case ACTION_TYPE.SET_USER:
//     //   return {
//     //     ...state,
//     //     user: { ...state.user, [action.payload.name]: action.payload.value },
//     //     // token: action.payload.token,
//     //   };
//     case ACTION_TYPE.SIGN_IN:
//       return {
//         ...state,
//         user: action.payload.user,
//         token: action.payload.token,
//       };
//     case ACTION_TYPE.SIGN_UP:
//       return {
//         ...state,
//         user: action.payload.user,
//         // token: action.payload.token,
//       };
//     case ACTION_TYPE.SIGN_OUT:
//       return initialState;

//     default:
//       return state;
//   }
// };

// const UserProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const value = useMemo(
//     () => ({
//       state,
//       dispatch,
//     }),
//     [state, dispatch],
//   );

//   return <userContext.Provider value={value}>{children}</userContext.Provider>;
// };

// export default UserProvider;

import { createContext, useMemo, useReducer } from "react";

export const authContext = createContext();

export const AUTH_ACTION = {
  SET_TOKEN: "SET_TOKEN",
  RESET_TOKEN: "RESET_TOKEN",
};

const initialState = {
  token: localStorage.getItem("accessToken") || "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTION.SET_TOKEN:
      localStorage.setItem("accessToken", action.token);
      return { ...state, token: action.token };
    case AUTH_ACTION.RESET_TOKEN:
      localStorage.removeItem("accessToken");
      return { ...state, token: "" };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
export default AuthProvider;
