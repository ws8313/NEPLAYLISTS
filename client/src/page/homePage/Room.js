import React, { useState, useEffect } from "react";
import { styled } from "@linaria/react";
import PlayBtns from './Room/PlayBtns';


const MusicRoom = styled.div`
  grid-area: main;
  display:flex;
  flex-direction: column;

  .scene {
    margin: auto;
    width: 400px;
    height: 400px;
    perspective: 1200px;
    perspective-origin: top right;
    .room {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transform: translateZ(-100px);
    }
    .room__wall {
      position: absolute;
      width: 100%;
      height: 100%;
      /* background-color: green; */
      /* opacity: 0.5; */
    }

    .room__wall-front {
      transform: rotateY(0deg) translateZ(200px);
    }
    .room__wall-right {
      transform: rotateY(90deg) translateZ(200px);
      /* background-color: red; */
    }
    .room__wall-back {
      transform: rotateY(180deg) translateZ(200px) scaleX(-1);
      
      /* background-color: black; */
    }
    .room__wall-left {
      transform: rotateY(-90deg) translateZ(200px);
      /* background-color: red; */
    }
    .room__wall-top {
      transform: rotateX(90deg) translateZ(200px);

    }
    .room__wall-bottom {
      transform: rotateX(-90deg) translateZ(200px);
      background-color: rgba(0,0,0,0.5);
      border : transparent;
    }
  }
`;

//Music Playing
export default function Room({ setNowPlaying, nowPlaying, music,changeNowPlaying }) {
  return (
    <MusicRoom>
      <div className="scene">
        <div className="room">
          <div className="room__wall room__wall-top">top</div>
          <div className="room__wall room__wall-bottom">btm</div>
          <div className="room__wall room__wall-left">left</div>
          <div className="room__wall room__wall-right">right</div>
          <div className="room__wall room__wall-back" style={{ background : `url(${music.albumImage})`, backgroundSize: 'contain'}}>back</div>
        </div>
      </div>
      <PlayBtns nowPlaying = {nowPlaying} setNowPlaying={setNowPlaying} music={music} changeNowPlaying={changeNowPlaying}/>
    </MusicRoom>
  );
}
