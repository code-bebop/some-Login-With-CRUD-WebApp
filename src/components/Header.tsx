import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBlock = styled.header`
  height: 10.3199%;
  padding: 0 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;
  font-size: 18px;
  font-weight: bold;

  & > div {
    a {
      &:first-child {
        margin-right: 50px;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Link to="/">홈 화면</Link>
      <div>
        <Link to="/login">로그인</Link>
        <Link to="/register">회원가입</Link>
      </div>
    </HeaderBlock>
  );
};

export default Header;
