import React from 'react'
import { Link } from "react-router-dom";
import { styled } from '@linaria/react';
import logo from '../../asset/logo (4).png'
const NavBtn = styled.button`
  /* margin: 15px; */
  /* width:80px; */
  
`

export default function Header() {
  return (
    <div style={{
      gridArea : "header",
      backgroundColor : 'black',
      display:'flex',
      justifyContent:'space-between',
      alignItems: 'center',
      padding:'5px 0' ,
      height:"100px",
      boxSizing: "border-box"
      }}>
      <Link to="/" 
      style={{
        textAlign:"center", 
        margin: "0 64px"
        }}>
          <img src={logo} style={{height:"50px",padding:' 0'}}></img>
      </Link>
      <div style={{
        margin: "0 64px",
        display : 'flex', 
        listStyle:'none', 
        verticalAlign:'center'
        }}>
        <NavBtn style={{
          border: "none",
          color: 'white',
          background: "none",
          fontSize: "25px"
          }}>로그인</NavBtn>
        <NavBtn style={{
          border: "none",
          color: 'white',
          background: "none",
          fontSize: "25px",
          paddingLeft: "25px"
          }}>회원가입</NavBtn>
      </div>
    </div>
  )
}