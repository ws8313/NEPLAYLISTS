import { styled } from "@linaria/react";
import { Position } from "@react-three/drei/helpers/Position";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import kakaoLogin from "../../asset/Login/pngegg.png";
import googleLogin from "../../asset/Login/login_google.png";
import axios from "axios";

const LoginContainer = styled.div`
  box-sizing: border-box;
  margin: 50px auto;
  position: absolute;
  left: calc(50% - 500px);
  top: calc(50% - 300px);
  width: 1000px;
  height: 500px;
  display: inline-block;
  box-shadow: 1px 1px 1px;
  div {
    box-sizing: border-box;
    display: inline-block;
    padding: 70px;
    width: 50%;
  }
  button {
    border: none;
    background-color: white;
    font: large;
  }
  .leftSlide {
    float: left;
    height: 100%;
  }

  .rightLogin {
    h2 {
      padding: 0 0 30px 0;
    }
  }
  .snsLoginBtn {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px;
    margin: 5px;
    font-weight: bold;
    font-size: large;
    display: flex;
    img {
      width:25px;
      height:25px;
      margin:auto 20px ;
    }
    p {
      width:100%;
      margin:auto;
    }
  }
  .kakao {
    background-color: yellow;
  }
  .google {
    background-color: white;
  }

  .closeBtn {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

function Login() {
  const handleLogin = async() => {
    await axios.get()
    .then(res => {
      if (res.token) {
        localStorage.setItem('jwt-token', res.token);
      }
    })
  } 
  return (
    <LoginContainer>
      <div className="leftSlide"></div>
      <div className="rightLogin">
        <h2>내플리스 시작하기</h2>
        <button className="snsLoginBtn kakao">
          <img src={kakaoLogin} /> <p>카카오 로그인</p>
        </button>
        <button className="snsLoginBtn google">
          <img src={googleLogin} /> <p>구글 로그인</p>
        </button>
      </div>
      <button className="closeBtn">
        <AiOutlineClose />
      </button>
    </LoginContainer>
  );
}

export default Login;
