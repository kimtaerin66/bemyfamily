import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { fetchnewDog, fetchnewCat } from '../api';

const Container = styled(motion.div)`
background-color:#eee ;
width: 100%;
height: 180px;
margin-top: 70px;
`;

const Title = styled.h1`

`;

function Slider() {
  const { isLoading:dogsLoading , data:dogs} = useQuery("newdog", fetchnewDog);
  const { isLoading:catsLoading , data:cats} = useQuery("newcat", fetchnewCat);
  console.log(dogs)
  return (
    <Container>
    <Title>공고중인 강아지</Title>
    </Container>
  );
}

export default Slider;
