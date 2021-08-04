import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const AuthFieldset = styled.fieldset`
  border: none;
  box-sizing: border-box;
  height: 100%;
`;

const AuthFormBlock = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 290px;
  & > input {
    height: 90px;
    margin-bottom: 65px;
  }
  & > label {
    font-size: 18px;
    margin-bottom: 15px;
  }
  & > button {
    width: 250px;
    height: 70px;
    align-self: flex-end;
    background-color: #fff;
    outline: none;
    border: 1px solid #222;
    font-weight: bold;
  }
`;

const AuthForm = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const { auth } = useParams<{ auth: "login" | "register" }>();

  const onLoginSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post<{ accessToken: string }>(
      "https://codebebop.tk/codebebopServer/auth/login",
      {
        userId: id,
        password,
        automaticLogin: true,
      },
      { withCredentials: true }
    );

    setToken(response.data.accessToken);

    console.log(token);
  };

  const onRegisterSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post(
      "https://codebebop.tk/codebebopServer/auth/register",
      {
        userId: id,
        password,
      }
    );

    console.log(response);
  };

  if (auth === "register") {
    return (
      <AuthFieldset>
        <AuthFormBlock onSubmit={onRegisterSubmit}>
          <label htmlFor="id">아이디 </label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <label htmlFor="password">패스워드 </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button>회원가입</button>
        </AuthFormBlock>
      </AuthFieldset>
    );
  }

  return (
    <AuthFieldset>
      <AuthFormBlock onSubmit={onLoginSubmit}>
        <label htmlFor="id">아이디 </label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <label htmlFor="password">패스워드 </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>로그인</button>
      </AuthFormBlock>
    </AuthFieldset>
  );
};

export default AuthForm;
