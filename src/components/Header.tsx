import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBlock = styled.header`
  height: 100px;
  padding: 0 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Link to="/">홈 화면</Link>
      <Link to="/login">로그인</Link>
    </HeaderBlock>
  );
};

export default Header;
