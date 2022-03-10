import React,{useState, useRef} from 'react'
import { styled } from '@linaria/react';
import { AiOutlinePause,AiFillCaretRight, AiOutlineDoubleRight,AiOutlineDoubleLeft } from "react-icons/ai";

const Container = styled.div`
  width:80%;
  border-radius: 50px  50px 0 0;
  display:flex;
  margin:0 auto ;
  justify-content: center;
  button {
    color:white;
    margin:0 ;
    background-color:rgba(0,0,0,0.7);
    width:30%;
    height: 50px;
  }
`

export default function PlayBtns({music, setNowPlaying, nowPlaying}) { 
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
      <button className= "prev" style={{borderRadius:"50px 0 0 0"}} onClick={handleMoveToAnotherMusic}><AiOutlineDoubleLeft/></button>
      <button onClick={toggle}>{playing ? <AiOutlinePause/> : <AiFillCaretRight/>}</button>
      <button className= "next" style={{borderRadius:"0 50px  0 0"}} onClick={handleMoveToAnotherMusic}> <AiOutlineDoubleRight/></button>
    </Container>
  )
}