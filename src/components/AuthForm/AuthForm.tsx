import { useParams } from "react-router-dom";
import styled from "styled-components";
import LoginFormBlock from "./LoginFormBlock";
import RegisterFormBlock from "./RegisterFormBlock";

const AuthFieldset = styled.fieldset`
  border: none;
  box-sizing: border-box;
  height: 100%;
`;

const AuthForm = () => {
  const { auth } = useParams<{ auth: "login" | "register" }>();

  if (auth === "register") {
    return (
      <AuthFieldset>
        <RegisterFormBlock />
      </AuthFieldset>
    );
  }

  return (
    <AuthFieldset>
      <LoginFormBlock />
    </AuthFieldset>
  );
};

export default AuthForm;
