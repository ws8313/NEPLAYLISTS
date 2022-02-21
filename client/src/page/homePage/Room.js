import React from "react";
import styled from "styled-components";

const MusicRoom = styled.div`
  grid-area: main;
  display: flex;
  margin: auto;
  text-align:center;
  .scene {
    width:400px;
    height:400px;
    perspective:1500px;
    perspective-origin:top;
    /* background-color:red; */
    .room {
      width:100%;
      height:100%;
      position:relative;
      transform-style:preserve-3d;
      transform:translateZ(-100px)
    }
    .room__wall {
      position:absolute;
      width:100%;
      height:100%;
      background-color:green;
      opacity:0.5;
    }
    
    .room__wall-front  { transform: rotateY(  0deg) translateZ(200px);       background-color:white; }
    .room__wall-right  { transform: rotateY( 90deg) translateZ(200px); background-color:red;}
    .room__wall-back   { transform: rotateY(180deg) translateZ(200px); background-color:black}
    .room__wall-left   { transform: rotateY(-90deg) translateZ(200px); background-color:red;}
    .room__wall-top    { transform: rotateX( 90deg) translateZ(200px); }
    .room__wall-bottom { transform: rotateX(-90deg) translateZ(200px); }
  }
`;


export default function Room() {
  return (
    <MusicRoom>
      {/* <button> 왼 </button> */}
 
      <div className="scene">
        <div className="room">
          <div className="room__wall room__wall-top">top</div>
          <div className="room__wall room__wall-bottom">btm</div>

          <div className="room__wall room__wall-left">left</div>
          <div className="room__wall room__wall-right">right</div>

          <div className="room__wall room__wall-back">back</div>
          <div className="room__wall room__wall-front">front</div>
        </div>
      </div>

      {/* <button> 오 </button> */}
    </MusicRoom>
  );
}
