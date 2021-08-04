import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const LoginFieldset = styled.fieldset`
  border: none;
  box-sizing: border-box;
  height: 100%;
`;

const LoginFormBlock = styled.form`
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

const LoginForm = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");

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

  return (
    <LoginFieldset>
      <LoginFormBlock onSubmit={onLoginSubmit}>
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
      </LoginFormBlock>
    </LoginFieldset>
  );
};

export default LoginForm;
