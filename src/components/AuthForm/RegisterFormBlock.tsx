import axios from "axios";
import { useState } from "react";
import AuthFormBlock from "./AuthFormBlock";

const RegisterFormBlock = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [registerError, setRegisterError] = useState<Boolean>(false);

  const onRegisterSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://codebebop.tk/codebebopServer/auth/register",
        {
          userId: id,
          password,
        }
      );

      setRegisterError(false);
      console.log(response);
    } catch (error) {
      setRegisterError(true);
      console.log(error);
    }
  };
  return (
    <AuthFormBlock
      onSubmit={onRegisterSubmit}
      authError={registerError && "register"}
    >
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
  );
};

export default RegisterFormBlock;
