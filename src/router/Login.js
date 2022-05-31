import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
`;
const Form = styled.form`
height: 200px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const InputID = styled.input`
width: 320px;
height: 48px;
border: 1px solid #dee2e6;
border-radius: 4px;
font-size: 15px;
padding: 13px 12px;
box-sizing: border-box;
:focus {
 outline: 0.05em auto #ff4757;
}
::placeholder {
  color: rgba(0,0,0,0.4);
  letter-spacing: -2px;
}
`;
const InputPW = styled(InputID)`
margin-top: 12px;

`;

const Submit = styled(InputPW)`
margin-top: 20px;
background-color: #ff4757;
color: #fff;
font-size: 16px;
font-weight: 700;
letter-spacing: -2px;
cursor: pointer;

`;

function Login() {
  const { register, handleSubmit } = useForm();
  return (
    <Container>
      <Form>
        <InputID type="text" placeholder="아이디" />
        <InputPW type="password" placeholder="비밀번호" />
        <Submit type="submit" value='로그인' />
      </Form>
    </Container>
  );
}

export default Login;
