import React from 'react'
import styled from 'styled-components'
// 각 곡은 Card 형식으로 존재. X 누를 시에 List에서 제외된다.
// DELETE_MUSIC action 실행됨. index가 바뀌는 거다.
// 위치도 바꿀수 있어야 한다.
// Drag n drop 형식 // 버튼을 누르면, 상or 하로 이동하는 형식

const MusicCard = (music) => {
  return (
    <li>
      <img src = {music.image} />
      <div>
      <h3>{music.title}</h3>
      {music.musician}
      </div>
    </li>
  )
}
const MusicContainer = styled.ul`
::-webkit-scrollbar { width: 5.2px; } /* 스크롤 바 */
::-webkit-scrollbar-track { background-color:black; } /* 스크롤 바 밑의 배경 */
::-webkit-scrollbar-thumb { background: #ddd; border-radius: 10px; } /* 실질적 스크롤 바 */
::-webkit-scrollbar-thumb:hover { background: #404040; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
::-webkit-scrollbar-thumb:active { background: #808080; } /* 실질적 스크롤 바를 클릭할 때 */
 
  grid-area:playlist;
  background-color : rgba(0,0,0,0.5);
  border-radius: 10px;
  color : white;
  
  margin:5px;
  list-style : none;
  line-height:1;
  overflow:auto;
  li {
    padding: 2px ;
    margin : 5px;
    text-align:left;
    background-color : rgba(0,0,0,0.5);
    border-radius: 10px;
    display : flex;

    h3{
      // 노래 제목이 칸을 넘어설 시 ...으로 표현 
      // +) onMouseOn(정확 x) dkaxms, 암튼 마우스가 올라가 있으면 제목이 Rotation.
      overflow:hidden;
      text-overflow: ellipsis;
      white-space:nowrap;

      width:15vw;
    }
    img { 
      object-fit : cover;
      height : 50px;
      width : 50px;
      margin-right : 7px;
      border-radius : 10px;
    }
  }
`




export default function Playlist() {
  const testSrc = 'https://i.pinimg.com/236x/8e/47/d0/8e47d0bd73dafa1d339cb2b2b13c2b7e.jpg'  
  const playList = [{title: '매우긴노래제목1매우긴노래제목1매우긴노래제목1', image: testSrc, musician:'아이유'},{title: '노래2', image: testSrc, musician:'아이유'},{title: '매우긴노래제목1매우긴노래제목1매우긴노래제목1', image: testSrc, musician:'아이유'},{title: '노래2', image: testSrc, musician:'아이유'},{title: '매우긴노래제목1매우긴노래제목1매우긴노래제목1', image: testSrc, musician:'아이유'},{title: '노래2', image: testSrc, musician:'아이유'},{title: '매우긴노래제목1매우긴노래제목1매우긴노래제목1', image: testSrc, musician:'아이유'},{title: '노래2', image: testSrc, musician:'아이유'}] // redux에 저장된 유저정보에서 가져올 것임
  const playLists = playList.map((music) => MusicCard(music) )
  
  return (
    <MusicContainer >
        { playLists }
    </MusicContainer> )
}