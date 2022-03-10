import { styled } from "@linaria/react";
// import { Position } from "@react-three/drei/helpers/Position";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import kakaoLoginImg from "../../asset/Login/pngegg.png";
import googleLoginImg from "../../asset/Login/login_google.png";
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
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init('1ae5b25dbdab5980875a7deef78b4e28');
    console.log(window.Kakao.isInitialized());
  }
  
  function kakaoLogin() {
    window.Kakao.Auth.login({
          success: function (authObj) {
            window.Kakao.API.request({
                  url: "/v2/user/me",
                  success: function (userObj) {
                      let logindata = {     
                          'authinfo' : authObj,
                          'userinfo' : userObj
                      }
                      console.log(logindata);
                      
                      var formData = new FormData();
                      const authinfo = JSON.stringify(authObj)
                      const userinfo = JSON.stringify(userObj)
                      formData.append('authinfo',authinfo);
                      formData.append('userinfo',userinfo);
                      
                      let uri = 'http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com/oauth'
                      axios.post(uri, formData, {
                          headers: {
                              "Content-Type": "multipart/form-data"
                          },
                      })
                      .then((response) => {
                          console.log('res',response.data);
                          localStorage.setItem("access_token",response.data.access_token)
                      })
                      .catch((error) => {
                          alert(error);
                      })
                  },
                  fail: function (error) {
                      console.log(error);
                  }
              });
          },
          fail: function (err) {
              console.log('에러', err);
              alert('로그인실패!');
          },
      });
  }
  

  // Logout 확인하기
  function kakaoLogout() {
      if (!window.Kakao.Auth.getAccessToken()){
          console.log("Not logged in");
          return;
      }
      window.Kakao.Auth.logout(function() {
          console.log(window.Kakao.Auth.getAccessToken());
          localStorage.removeItem("access_token")
      })
  }

  // id를 기준으로 유
  // 최초 로그인 떄에는 access, expire, refresh, ref ex 다 넘겨줘야한다.

  //요청때마다, access_token만 주면된다.
  // userInfo에서는 properti 에서 

  return (
    <LoginContainer>
      <div className="leftSlide"></div>
      <div className="rightLogin">
        <h2>내플리스 시작하기</h2>
        <button className="snsLoginBtn kakao" onClick={kakaoLogin}>
          <img src={kakaoLoginImg} /> <p>카카오 로그인</p>
        </button>
        <button className="snsLoginBtn google" onClick={kakaoLogout}>
          <img src={googleLoginImg} /> <p>로그 아웃</p>
        </button>
      </div>
      <button className="closeBtn">
        <AiOutlineClose />
      </button>
    </LoginContainer>
  );
}

export default Login;
