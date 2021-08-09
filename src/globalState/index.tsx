import React, { createContext, Dispatch } from "react";
import { useContext } from "react";
import { useReducer } from "react";

type LoginStateT = {
  accessToken: string;
};
type LoginActionT = {
  type: "SET_TOKEN";
  accessToken: string;
};

const initialState: LoginStateT = {
  accessToken: "",
};

const loginReducer = (state: LoginStateT, action: LoginActionT) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, accessToken: action.accessToken };
    default:
      throw new Error("invalid action type");
  }
};

export const loginStateContext = createContext(initialState);
export const loginDispatchContext =
  createContext<Dispatch<LoginActionT> | null>(null);

export const useLoginState = () => {
  const loginState = useContext(loginStateContext);
  if (!loginState) throw new Error("loginState is null");

  return loginState;
};

export const useLoginDispatch = () => {
  const loginDispatch = useContext(loginDispatchContext);
  if (!loginDispatch) throw new Error("loginDispatch is null");

  return loginDispatch;
};

const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  return (
    <loginDispatchContext.Provider value={dispatch}>
      <loginStateContext.Provider value={{ accessToken: state.accessToken }}>
        {children}
      </loginStateContext.Provider>
    </loginDispatchContext.Provider>
  );
};

export default LoginProvider;
