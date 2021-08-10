import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { useLoginDispatch } from "../globalState";

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

  & > .formButtonWrapper {
    align-self: flex-end;
    user-select: none;
    & > button {
      width: 250px;
      height: 70px;
      outline: none;
      background-color: #ff69b4;
      border: 1px solid #ff69b4;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #fd3b9c;
        border: 1px solid #fd3b9c;
      }
      &:active {
        background-color: #ff0281;
        border: 1px solid #ff0281;
      }
    }

    & > label {
      align-self: flex-end;
      cursor: pointer;
      font-weight: bold;
      & > input[type="checkbox"] {
        display: none;
        &:checked + label {
          background-color: #ff0281;
        }
      }
      & > label {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-left: 10px;
        margin-right: 50px;
        border: 2px solid #ff69b4;
        cursor: pointer;
        vertical-align: -0.35em;
      }
    }
  }
`;

const AuthForm = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [autoLogin, setAutoLogin] = useState<Boolean>(false);

  const { auth } = useParams<{ auth: "login" | "register" }>();

  const history = useHistory();
  const loginDispatch = useLoginDispatch();

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
        automaticLogin: autoLogin,
      },
      { withCredentials: true }
    );

    loginDispatch({
      type: "SET_TOKEN",
      accessToken: response.data.accessToken,
    });
    history.push("/Home");

    console.log(response.data.accessToken);
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

  const onAutoLogin = () => {
    setAutoLogin(!autoLogin);
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

          <div className="formButtonWrapper">
            <button>계정 만들기</button>
          </div>
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

        <div className="formButtonWrapper">
          <label htmlFor="autoLogin">
            자동 로그인
            <input
              type="checkbox"
              name="autoLogin"
              value="autoLogin"
              id="autoLogin"
              onChange={onAutoLogin}
            />{" "}
            <label htmlFor="autoLogin" />
          </label>
          <button>로그인</button>
        </div>
      </AuthFormBlock>
    </AuthFieldset>
  );
};

export default AuthForm;
