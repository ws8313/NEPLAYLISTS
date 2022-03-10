import React from 'react'
import { Link } from "react-router-dom";
import { styled } from '@linaria/react';
import logo from '../../asset/logo (4).png'
import { kakaoLogout, kakaoLogin } from '../../util/loginApi';
const NavBtn = styled.button`
  position:absolute;
margin:5px;
  width:80px;
`


export default function Header({isLogined,setIsLogined}) {
  const handleLogin = ()=> {
    if (isLogined) {
      kakaoLogin();
    }
    else {
      kakaoLogout();
    }
    setIsLogined(!isLogined)
  }
  return (
    <div style={{ gridArea : "header", backgroundColor : 'black', display:'flex', justifyContent:'space-between', padding:'5px 0' , margin:'0px 0'}}>
      <Link to="/" style={{width:"25vw", textAlign:"center"}}><img src={logo} style={{ height : "30px",padding:' 0'}}></img></Link>
      <div style={{display : 'flex', listStyle:'none', verticalAlign:'center',}}>
      {isLogined ?
        <NavBtn onClick={handleLogin}>로그인</NavBtn> :
        <NavBtn onClick={handleLogin}>로그아웃</NavBtn>
      }
      </div>
    </div>
  )
}