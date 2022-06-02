import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eee;
  min-width: 1200px;
 
`;

const Nav = styled.nav`
  width: 1200px;
  height: 78px;
  text-align: center;
  position: relative;
`;

const Gnb = styled.ul`
  display: flex;
  align-items: center;
  float: left;
  justify-content :center;
  height: 78px;
  padding-top: 15px;
`;

const Logo = styled.div`
position: absolute;
top: 20px;
left: 50%;
transform: translate(-50%, 0%);
font-size: 18px;
letter-spacing: 5px;
p{
  margin-top: 5px;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 2;
}
`;

const GnbRight = styled.ul`
  display: flex;
  align-items: center;
  float: right;
  justify-content :center;
  height: 78px;
  padding-top: 15px;
`;

const Li = styled.li`
  margin: 0 13px;
`;

const Icon = styled.svg`
  display: inline-block;
  width: 23px;
  height: 23px;
  margin-right:10px;
`;

function Header() {
  return (
    <Container>
      <Nav>
        <Gnb>
          <Link to="/find"><Li> 유기동물 찾기 </Li></Link>
          <Link to="/shelter"> <Li>보호소 안내</Li></Link>
          <Link to="/review"> <Li>입양후기</Li></Link>
          <Link to="/notice"> <Li>공지사항</Li></Link>
        </Gnb>
        <Logo>
        <Link to="/"> Be My <p>FAMILY</p></Link>
        </Logo>
        <GnbRight>
          <Li>
          <Link to="/login">
            <Icon
              fill="#4a4a4a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
            </Icon>
            </Link>
          </Li>
        </GnbRight>
      </Nav>
    </Container>
  );
}

export default Header;
