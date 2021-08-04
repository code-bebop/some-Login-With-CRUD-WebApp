import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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

  // const requestRefresh = async () => {
  //   const response = await axios.get(
  //     "https://codebebop.tk/codebebopServer/auth/refresh",
  //     { withCredentials: true }
  //   );

  //   console.log(response);
  // };

  return (
    <>
      <form onSubmit={onRegisterSubmit}>
        <label htmlFor="id">아이디: </label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <label htmlFor="password">패스워드: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>회원가입</button>
      </form>

      {/* <button onClick={requestRefresh}>Refresh로 요청</button> */}
    </>
  );
};

export default RegisterForm;