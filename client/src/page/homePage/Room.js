// import React, { useState, useEffect } from "react";
// import { styled } from "@linaria/react";
import PlayBtns from './Room/PlayBtns';
import { setNowPlaying } from "../../redux/actions/playlist";
import { useDispatch, useSelector } from "react-redux";

import React,{useState, useRef} from 'react'
import { styled } from '@linaria/react';
import { AiOutlinePause,AiFillCaretRight, AiOutlineDoubleRight,AiOutlineDoubleLeft } from "react-icons/ai";

const MusicRoom = styled.div`
  display:flex;
  flex-direction: column;
  background-color:white;
  .scene {
    margin: auto;
    width: 400px;
    height: 400px;
    perspective: 1200px;
    perspective-origin: top right ;
    img {
      background-size:contain;
      width:100%;
      height:100%;
    }
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


const Container = styled.div`
  position:absolute;
  bottom:0;
  width:100%;
  border-radius: 50px  50px 0 0;
  display:flex;
  margin: auto;
  justify-content: center;
  button {
    color:white;
    margin:0 ;
    background-color:rgba(0,0,0,0.7);
    width:100px;
    height: 50px;
  }
`
export default function Room() { 
  const dispatch = useDispatch();
  const setNowPlaying= (idx) => dispatch(setNowPlaying(idx))
  const {nowPlaying, music} = useSelector(state => {
    return {
    nowPlaying : state.playlist.nowPlaying,
    music : state.playlist.playlist[state.playlist.nowPlaying]
  }})

  const audioPlayer = useRef();
  const audio = new Audio(music.audio)
  const [playing,setPlaying ]= useState(true)

  const toggle = () => {
    if (playing) {
      audioPlayer.current.pause()
      setPlaying(!playing)
    }
    else {
      audioPlayer.current.play()  
      setPlaying(!playing)
    }
    }

    const handleMoveToAnotherMusic = (e) => {
    const direction = e.target.className;
    if (direction == "prev") {
      setNowPlaying(nowPlaying - 1);
    } else {
      setNowPlaying(nowPlaying + 1);
    }
  };
  console.log(music)
  
  return (
    <Container>
      <audio src={music.audio} ref={audioPlayer} />
      <button className= "prev" style={{borderRadius:"70px 0 0 0"}} onClick={handleMoveToAnotherMusic}><AiOutlineDoubleLeft/></button>
      <button onClick={toggle}>{playing ? <AiOutlinePause/> : <AiFillCaretRight/>}</button>
      <button className= "next" style={{borderRadius:"0 70px  0 0"}} onClick={handleMoveToAnotherMusic}> <AiOutlineDoubleRight/></button>
    </Container>
  )
}