import axios from "axios";
import { useState } from "react";
import { Cookies } from "react-cookie";
import { useHistory } from "react-router";
import { useLoginDispatch } from "../../globalState";
import AuthFormBlock from "./AuthFormBlock";

const LoginFormBlock = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [autoLogin, setAutoLogin] = useState<Boolean>(false);
  const [loginError, setLoginError] = useState<Boolean>(false);

  const history = useHistory();
  const loginDispatch = useLoginDispatch();
  const cookies = new Cookies(["refreshToken"]);

  const onLoginSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<{
        accessToken: string;
        refreshToken: string;
      }>(
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
      cookies.set("refreshToken", response.data.refreshToken);
      setLoginError(false);
      history.push("/Home");

      console.log(response.data.accessToken);
    } catch (error) {
      setLoginError(true);
      console.log(error);
    }
  };

  const onAutoLogin = () => {
    setAutoLogin(!autoLogin);
  };

  return (
    <AuthFormBlock onSubmit={onLoginSubmit} authError={loginError && "login"}>
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
  );
};

export default LoginFormBlock;
