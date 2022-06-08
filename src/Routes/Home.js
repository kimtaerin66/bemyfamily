import React from "react";
import styled from "styled-components";
import Search from "./../Components/Search";
import Slider from './../Components/Slider';

const userWidth = (window.innerWidth)/100 * 80;
const Container = styled.div`
  margin: 0 auto;
  width: ${userWidth}px;
  height: auto;

`;

function Home() {
  return (
    <Container>
     <Search />
     <Slider />
    </Container>
  );
}

export default Home;
