import React,{useState} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";


const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 25px;
`;
const Title = styled.p`
  font-family: "S-CoreDream-5Medium";
  margin-bottom: 20px;
`;
const Form = styled.form`
position:relative;
width: 550px;
margin-bottom: 17px;
`;
const SearchI = styled.input`
  border: 1px solid #dee2e6;
  border-radius: 30px;
  width: 550px;
  height: 58px;
  font-size: 20px;
  padding-left: 20px;
  box-shadow:0 2px 4px rgba(0,0,0,0.2);
  :focus {
    outline: none;
  }
  ::placeholder {
    letter-spacing: -2px;
    padding-left: 20px;
  }
`;

const Icon = styled.svg`
 position: absolute;
  display: inline-block;
  width: 30px;
  height: 30px;
  top: 16px;
  right: 18px;
  cursor: pointer;
`;
const TagBox = styled.ul`
display:flex;
`;

const Tag = styled.li`
font-size: 12px;
color: #3e4042;
background-color: #f1f3f5;
padding: 2px 12px;
text-align: center;
border-radius: 30px;
line-height: 1.5;
font-family: 'S-CoreDream-5Medium';
margin-right: 12px;
`;

function Search() {
  const { register, handleSubmit } = useForm();
  const [ search, setSearch ] = useState("");
  const onValid = () => {
  };
  const onSubmit = () => {
  };
  return (
    <Container>
      <Title>가족이 되고 싶은 동물을 찾아보세요 </Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <SearchI
         {...register("animal", { required: true, minLength: 1 })}
         type="text">
         </SearchI>
        <Icon onSubmit={onSubmit}
          fill="#4a4a4a"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
        </Icon>
      </Form>
      <TagBox>
        <Tag>#강아지</Tag>
        <Tag>#고양이</Tag>
        <Tag>#토끼</Tag>
        <Tag>#햄스터</Tag>
        <Tag>#기타동물</Tag>
      </TagBox>
    </Container>
  );
}

export default Search;
