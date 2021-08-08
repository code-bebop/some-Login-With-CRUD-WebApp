import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLoginDispatch, useLoginState } from "../globalState";

const HeaderBlock = styled.header`
  padding: 0 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;
  font-size: 18px;
  font-weight: bold;

  button {
    border: none;
    background-color: transparent;
    color: inherit;
    font-weight: inherit;
    cursor: pointer;
  }

  & > div {
    a {
      &:first-child {
        margin-right: 50px;
      }
    }
  }
`;

const Header = () => {
  const loginState = useLoginState();
  const loginDispatch = useLoginDispatch();

  return (
    <HeaderBlock>
      <Link to="/">홈 화면</Link>
      {loginState.accessToken ? (
        <button
          onClick={() => {
            loginDispatch({ type: "SET_TOKEN", accessToken: "" });
          }}
        >
          로그아웃
        </button>
      ) : (
        <div>
          <Link to="/auth/login">로그인</Link>
          <Link to="/auth/register">회원가입</Link>
        </div>
      )}
    </HeaderBlock>
  );
};

export default Header;
