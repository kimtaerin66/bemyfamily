import React,{useState} from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Join from "./Join";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
    color: rgba(0, 0, 0, 0.4);
    letter-spacing: -2px;
  }
`;
const PWdiv = styled.div`
  position: relative;
  p {
    position: absolute;
    top: 50%;
    right: 20px;
    cursor: pointer;
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
  border: none;
`;

const JoinD = styled.div`
  font-size: 13px;
  color: #747d8c; //gray
`;

function Login() {
  const [see, setSee] = useState(false);
  const { register, handleSubmit } = useForm();
  const onClick = () => {
    setSee((prev)=> !prev);
  }
  const onValid = () => {
    //로그인되면 home으로보내기
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <InputID
          {...register("id", { required: true, minLength: 3 })}
          type="text"
          placeholder="아이디"
        />
        <PWdiv>
          <InputPW
            {...register("pw", { required: true, minLength: 3 })}
            type={see ? "text" : "password"}
            placeholder="비밀번호"
          />
          <p onClick={onClick}>
            {see ? <><FontAwesomeIcon icon={faEye} size="1x" color="#747d8c" /></>
            :<FontAwesomeIcon icon={faEyeSlash} size="1x" color="#747d8c" /> }
          </p>
        </PWdiv>
        <Submit type="submit" value="로그인" />
      </Form>
      <Link to={<Join />}>
        <JoinD>회원가입</JoinD>
      </Link>
    </Container>
  );
}

export default Login;
