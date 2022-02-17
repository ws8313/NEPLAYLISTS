import React from 'react'
import styled from 'styled-components'

const PlayList = styled.ul`
  width : 300px;
  list-style : none;

  li {
    background-color : red;
  }
`

export default function Playlist() {
  const playList = ['노래1', '노래2','노래3'] // redux에 저장된 유저정보에서 가져올 것임
  const playLists = playList.map((name) => <li> {name} </li>) 

  return (
    <PlayList >
        { playLists }
    </PlayList> )
}
