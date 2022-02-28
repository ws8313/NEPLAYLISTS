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
// 일단, 연결해서 분석을 하면, 이런식으로 분석결과가 나타나고, 어떤 것들을 추천해줄 것이다. 라는 것 까지 설명을 해야할 것 같아서요.
// 오늘 분석 요청하는 api 보내서, 결과 받는 것까지는 불가능하니까, 그냥 이론적으로 어떤 툴을 써서, 카테고리 00개로 분류를 할 것이다 라는 이야기.
// + 알파
// 실제로, 해본 결과물. 등등....   

export default function PlayBtns({music, changeNowPlaying, nowPlaying}) { 
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
      changeNowPlaying(nowPlaying - 1);
    } else {
      changeNowPlaying(nowPlaying + 1);
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