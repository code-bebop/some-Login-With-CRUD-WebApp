import styled, { css } from "styled-components";

const AuthFormBlock = styled.form<{ authError: "login" | "register" | null }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
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

  ${({ authError }) =>
    authError &&
    css`
      .formInner {
        &:not(:first-child) {
          color: red;
          &::before {
            content: ${() =>
              authError === "login"
                ? `"아이디 혹은 비밀번호가 일치하지 않습니다."`
                : `"이미 존재하는 아이디입니다."`};
            display: inline;
            position: absolute;
            bottom: 15px;
          }
        }
      }
    `}
`;

export default AuthFormBlock;
