import React from 'react'
import {styled}  from '@linaria/react';
import {AiFillCaretRight,AiOutlineClose} from 'react-icons/ai'
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

    button {
        background-color:rgba(50,50,50,0.7);
        color:white;
        height:40px;
        width:40px;
        border-radius: 10px;
        font-size: xx-large;
        margin:auto;
        * {
          margin:auto;
        }
      }
  }
`

const MusicCard = (music, index, deleteMusic,changeNowPlaying ) => {
  const handleDelete = (index) => {
    const deleteConfirm = window.confirm('정말로 플레이리스트에서 삭제하시겠습니까? 삭제 시 편집한 해당 곡의 Room 정보는 초기화 됩니다.');
    if (deleteConfirm) {
      deleteMusic(index)
    }
  }
  return (
    <li>
      <img src = {music.albumImage} />
      <div>
        <h3>{music.title}</h3>
        {music.musician}
      </div>
        <button onClick={()=>changeNowPlaying(index)}><AiFillCaretRight/></button>
        <button onClick={()=>handleDelete(index)}><AiOutlineClose/></button>
    </li>
  )
}

export default function Playlist({playlist, deleteMusic, changeNowPlaying}) {  
  const playLists = playlist.map((music,index) => MusicCard(music, index, deleteMusic, changeNowPlaying))
  return (
    <MusicContainer >
        { playLists }
    </MusicContainer> )
}