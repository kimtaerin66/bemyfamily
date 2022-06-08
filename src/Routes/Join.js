import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons"; import axios from 'axios';
import Axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const Title = styled.div`
  font-size: 22px;
  margin-bottom: 60px;
  color: #222;
`;
const Form = styled.form`
  display: flex;
  width: 320px;
  flex-direction: column;
`;

const Label = styled.label`
margin-bottom: 15px;
font-size: 12px;
margin-top: 10px;
`;
const InputID = styled.input`
  width:100%;
  height: 48px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 15px;
  padding: 13px 12px;
  box-sizing: border-box;
  margin-top: -8px;
  margin-bottom: 5px;
  :focus {
    outline: 0.03em auto #ff4757;
  }
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
    letter-spacing: -2px;
  }
`;
const PWdiv = styled.div`
position: relative;
  p{ 
    position: absolute;
    top: 10px;
    right:10px;
    cursor: pointer;
}
   
`;
const PWdiv2 = styled(PWdiv)`

`;

const InputPW = styled(InputID)`

`;
const InputPW2 = styled(InputPW)``;
const Submit = styled(InputPW)`
  margin-top: 20px;
  background-color: #ff4757;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -2px;
  cursor: pointer;
  border: none;
`;

const Error = styled.span`
  color: tomato;
  font-size: 12px;
  margin-bottom: 13px;
`;
function Join() {
  const [userInfo , setUserInfo] = useState([]);
  const [see, setSee] = useState(false);
  const [see2, setSee2] = useState(false);
  const {
    register,  handleSubmit, formState:{errors}, setError } = useForm();
  const onValid = (data) => {
  if(data.pw !== data.pw2){
    setError("pw2",{ message:"비밀번호를 확인해주세요"}) }
  }
  const onClick = (e) => {
    setSee((prev)=> !prev);
  }
  const onClick2 = (e) => {
    setSee2((prev)=> !prev);
  }
  const onSubmit = () => {
    Axios.get("http://localhost:5000/",{})
    .then(()=>{
      alert('등록완료');
  })
  }
  return (
    <Container>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Label htmlFor="userid">아이디</Label>
        <InputID
          {...register("id", {required: true, minLength :{
            value : 4,
            message : "4글자이상입력해주세요"
          }, maxLength : 12,
        })}
          type="text"
          placeholder="아이디"
          id="userid"

        />
        <Error>{errors?.id?.message} </Error>
          <Label htmlFor="userpw">비밀번호</Label>
          <PWdiv>
          <InputPW
            {...register("pw", {required: true, minLength :{
              value : 4,
              message : "4글자이상 입력해주세요"
            }, maxLength : 12,
          })}
            type={see ? "text" : "password"}
            placeholder="비밀번호"
            id="userpw"
          />
           <Error>{errors?.pw?.message} </Error>
       <p onClick={onClick}>
         {<FontAwesomeIcon icon={see ? faEye : faEyeSlash} size="1x" color="#747d8c"  />}
       </p>
          </PWdiv>
          <Label htmlFor="userpw2">비밀번호 확인</Label>
          <PWdiv2>
          <InputPW2
            {...register("pw2",{
              required:"비밀번호를 확인해주세요",
            })}
            type={see2 ? "text" : "password"}
            placeholder="비밀번호 확인"
            id="userpw2"
          />            
          <p onClick={onClick2}>
            {<FontAwesomeIcon icon={see2 ? faEye : faEyeSlash} size="1x" color="#747d8c"  />}
          </p>
          <Error>{errors?.pw2?.message} </Error>
         </PWdiv2>
        <Submit onSubmit={onSubmit} type="submit" value="가입하기" />
      </Form>
    </Container>
  );
}

export default Join;
