import React,{ useState,useEffect} from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from 'axios';

const Container = styled(motion.div)`
background-color:#eee ;
width: 100%;
height: 180px;
margin-top: 70px;
`;

const Title = styled.h1`

`;

function Slider() {
  const [data, setData] = useState();
  const getData = async() => {
    await axios.get("http://localhost:5000/api")
    .then((res) => setData((res.data.elements[0].elements[1].elements[0].elements)))
    // console.log((dogs[0].elements[0].elements[0].text))//나이..
 }
  useEffect(()=>{
    getData();
  },[]);
  console.log(data[0])
  return (
    <Container>
    <Title>공고중인 강아지</Title>
       {data !== undefined ? <>
       {data.map((dog) => <>{dog.elements[0].elements[0].text }</>) }
       </> : null  } 
   
    </Container>
  );
}

export default Slider;
