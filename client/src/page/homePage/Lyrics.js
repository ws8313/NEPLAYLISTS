import React from 'react'
import {styled}  from '@linaria/react';
import { useSelector } from 'react-redux';

const Lyric = styled.div`
::-webkit-scrollbar { width: 5.2px; } /* 스크롤 바 */
::-webkit-scrollbar-track { background-color:black; } /* 스크롤 바 밑의 배경 */
::-webkit-scrollbar-thumb { background: #ddd; border-radius: 10px; } /* 실질적 스크롤 바 */
::-webkit-scrollbar-thumb:hover { background: #404040; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
::-webkit-scrollbar-thumb:active { background: #808080; } /* 실질적 스크롤 바를 클릭할 때 */

  position:absolute;
  top:45px;
  right:0;

  width:300px;
  height:30%;
  background-color : rgba(0,0,0,0.5);
  border-radius: 10px;
  color:white;

  list-style : none;
  margin :5px;

  text-align:center;
  overflow:auto;
`

export default function Lyrics() {
  // const lyric = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu'
  const lyrics = useSelector(state=>{
    return state.playlist.lyric
  })
  console.log(lyrics)
  return (
    <Lyric >
        { lyrics }
    </Lyric> )
}