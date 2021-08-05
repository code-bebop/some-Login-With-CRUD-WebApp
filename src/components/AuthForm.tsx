import axios from "axios";
import { useEffect } from "react";
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
  & > .formInner {
    position: relative;
    & > input {
      height: 90px;
      width: 100%;
      margin-bottom: 65px;
      border: none;
      border-bottom: 2px solid #000;
      outline: none;
      line-height: 2em;
      padding: 20px 0 5px 0;
      font-size: 1.2em;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      -o-transition: all 0.2s ease;
      &:focus,
      &:not(:placeholder-shown) {
        border-bottom-color: hotpink;
      }
      &::placeholder {
        color: transparent;
      }
      &:placeholder-shown + label {
        color: #aaa;
        font-size: 14px;
        top: 15px;
      }
    }
    input:focus + label,
    label {
      color: hotpink;
      font-size: 10pt;
      pointer-events: none;
      position: absolute;
      left: 0px;
      top: 0px;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      -o-transition: all 0.2s ease;
    }
  }

  & > button {
    width: 250px;
    height: 70px;
    align-self: flex-end;
    background-color: #fff;
    outline: none;
    border: 1px solid #222;
    font-weight: bold;
    cursor: pointer;
  }
`;

const AuthForm = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const { auth } = useParams<{ auth: "login" | "register" }>();

  useEffect(() => {
    setId("");
    setPassword("");
  }, [auth]);

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
          <div className="formInner">
            <input
              type="text"
              id="id"
              placeholder="아이디"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <label htmlFor="id">아이디 </label>
          </div>
          <div className="formInner">
            <input
              type="password"
              id="password"
              placeholder="패스워드"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="password">패스워드 </label>
          </div>

          <button>계정 만들기</button>
        </AuthFormBlock>
      </AuthFieldset>
    );
  }

  return (
    <AuthFieldset>
      <AuthFormBlock onSubmit={onLoginSubmit}>
        <div className="formInner">
          <input
            type="text"
            id="id"
            placeholder="아이디"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <label htmlFor="id">아이디 </label>
        </div>
        <div className="formInner">
          <input
            type="password"
            id="password"
            placeholder="패스워드"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="password">패스워드 </label>
        </div>

        <button>로그인</button>
      </AuthFormBlock>
    </AuthFieldset>
  );
};

export default AuthForm;
