import React, { createContext, Dispatch } from "react";
import { useReducer } from "react";

type LoginStateT = {
  accessToken: string;
};
type LoginActionT = {
  type: "SET_TOKEN";
};

const initialState: LoginStateT = {
  accessToken: "",
};

const loginReducer = (state: LoginStateT, action: LoginActionT) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { accessToken: "TEMP_TOKEN" };
    default:
      throw new Error("invalid action type");
  }
};

export const loginStateContext = createContext("");
export const loginDispatchContext =
  createContext<Dispatch<LoginActionT> | null>(null);

const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  return (
    <loginDispatchContext.Provider value={dispatch}>
      <loginStateContext.Provider value={state.accessToken}>
        {children}
      </loginStateContext.Provider>
    </loginDispatchContext.Provider>
  );
};

export default LoginProvider;
