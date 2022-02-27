import React from 'react'
import { Link } from "react-router-dom";
import { styled } from '@linaria/react';
import logo from '../../asset/logo (4).png'
const NavBtn = styled.button`
  margin:5px;
  width:80px;
  
`

export default function Header() {
  return (
    <div style={{ gridArea : "header", backgroundColor : 'black', display:'flex', justifyContent:'space-between', padding:'5px 0' , margin:'1px 0'}}>
      <Link to="/" style={{width:"25vw", textAlign:"center"}}><img src={logo} style={{height:"30px",padding:' 0'}}></img></Link>
      <div style={{display : 'flex', listStyle:'none', verticalAlign:'center',}}>
        <NavBtn>로그인</NavBtn>
        <NavBtn>회원가입</NavBtn>
      </div>
    </div>
  )
}