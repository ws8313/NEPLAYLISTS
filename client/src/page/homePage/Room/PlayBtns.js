import React,{useEffect,useState} from 'react'
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

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);
  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};


export default function PlayBtns({url,setNowPlaying,nowPlaying}) {
  const [playing, toggle] = useAudio(url);
  const handleMoveToAnotherMusic = (direction) => {
    console.log(direction);
    if (direction == "prev") {
      setNowPlaying(nowPlaying + 1);
    } else {
      setNowPlaying(nowPlaying - 1);
    }
  };
  // const handlePause
  return (
    <Container>
      <button className= "prev" style={{borderRadius:"50px 0 0 0"}} onClick={()=>handleMoveToAnotherMusic()}><AiOutlineDoubleLeft/></button>
      <button onClick={toggle}>{playing ? <AiOutlinePause/> : <AiFillCaretRight/>}</button>
      <button className= "next" style={{borderRadius:"0 50px  0 0"}} onClick={()=>handleMoveToAnotherMusic()}> <AiOutlineDoubleRight/></button>
      {/* <button></button> */}
    </Container>
  )
}