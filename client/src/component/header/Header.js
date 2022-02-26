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
    <div style={{ gridArea : "header", backgroundColor : 'black', display:'flex', justifyContent:'space-between', padding:'5px' , margin:'1px'}}>
      <Link to="/" style={{width:"700px"}}><img src={logo} style={{height:"30px",padding:'5px 80px 0'}}></img></Link>
      <div style={{display : 'flex', listStyle:'none', verticalAlign:'center',}}>
        <NavBtn>로그인</NavBtn>
        <NavBtn>회원가입</NavBtn>
      </div>
      <></>
      {/* <></> */}
    </div>
  )
}
