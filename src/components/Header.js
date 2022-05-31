import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
width: 100%;
height: 78px;
background-color: yellow;
display: flex;
align-items: center;
justify-content: center;
`;

const Nav = styled.nav`
width: 1200px;
height: 78px;
`;

const Logo = styled.div``;



const Gnb = styled.ul`
display: flex;
align-items: center;
`;


const Li = styled.li`
margin: 0 10px ;

`;


function Header() {
  return (
      <Container>
    <Nav >
     <Gnb>
         <Li>유기동물 찾기</Li>
         <Li>보호소 안내</Li>
         <Li>입양후기</Li>
         <Li>공지사항</Li>
     </Gnb>
    </Nav>
    </Container>
  );
}

export default Header;
