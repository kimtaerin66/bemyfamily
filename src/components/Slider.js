import React,{ useState,useEffect} from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


const Container = styled(motion.div)`
width: 100%;
height: 180px;
margin-top: 70px;
`;

const Container2 = styled(Container)`
margin-top: 180px;
`;

const Title = styled.h1`
font-size: 25px;
font-family: 'S-CoreDream-5Medium';
`;
const List = styled.ul`
display:flex;
align-items: center;
height: 250px;
overflow: hidden;

`;
const Item =  styled.li`
box-sizing: border-box;
margin: 15px 25px;

:first-child {
  margin-left: 0;
}
`;

const Thumb = styled.div`
width: 150px;
height: 200px;
background-image: url(${(props) => props.bg});
background-size: cover;
background-position: center;
border-radius: 10px;
`; 

function Slider() {
  const [data1, setData1] = useState();//강아지
  const [data2, setData2] = useState();//고양이
  const getData1 = async() => {
    await axios.get("http://localhost:5000/api")
    .then((res) => setData1((res.data.elements[0].elements[1].elements[0].elements)))
 }
//  const getData2 = async() => {
//   await axios.get("http://localhost:5000/api")
//   .then((res) => setData2((res.data.elements[0].elements[1].elements[0].elements)))
//   // console.log((dogs[0].elements[0].elements[0].text))//나이..
// }

  useEffect(()=>{
  getData1();
  },[data1]);
  return ( <>
    <Container>
    <Title> 
      <FontAwesomeIcon 
      icon={faPaw} size="1x" color="#4a4a4a"
      style={{marginRight:"12"}}
      />
       공고중인 강아지</Title>
       {data1 !== undefined ?  <List>
       {data1.map((dog,idx) => 
         <Item key={idx}>
       <Thumb bg={dog.elements[7].elements[0].text} />
       {dog.elements[0].elements[0].text}
       </Item>
       ) }
      </List> : null  } 
   
    </Container>
    {/* <Container2>
    <Title> 
      <FontAwesomeIcon 
      icon={faPaw} size="1x" color="#4a4a4a"
      style={{marginRight:"12"}}
      />
       공고중인 고양이</Title>
       {data2 !== undefined ?  <List>
       {data2.map((cat,idx) => 
         <Item key={idx}>
       <Thumb bg={cat.elements[7].elements[0].text} />
       {cat.elements[0].elements[0].text}
       </Item>
       ) }
      </List> : null  } 
   
    </Container2> */}
    </> );
}

export default Slider;
