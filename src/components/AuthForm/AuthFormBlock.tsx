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
      border-bottom: 2px solid ${({ theme }) => theme.color.primary.black};
      outline: none;
      line-height: 2em;
      padding: 20px 0 5px 0;
      font-size: 18px;
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
      color: ${({ theme }) => theme.color.primary.default};
      font-size: 10px;
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
      background-color: ${({ theme }) => theme.color.primary.default};
      border: 1px solid ${({ theme }) => theme.color.primary.default};
      color: ${({ theme }) => theme.color.primary.white};
      ${({ theme }) => theme.typo.button.bold};
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.color.primary.deep};
        border: ${({ theme }) => theme.color.primary.deep};
      }
      &:active {
        background-color: ${({ theme }) => theme.color.primary.dark};
        border: 1px solid ${({ theme }) => theme.color.primary.dark};
      }
    }

    & > label {
      align-self: flex-end;
      cursor: pointer;
      ${({ theme }) => theme.typo.body.bold};
      & > input[type="checkbox"] {
        display: none;
        &:checked + label {
          background-color: ${({ theme }) => theme.color.primary.dark};
        }
      }
      & > label {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-left: 10px;
        margin-right: 50px;
        border: 2px solid ${({ theme }) => theme.color.primary.default};
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
