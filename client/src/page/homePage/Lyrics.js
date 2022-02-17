import React from 'react'
import styled from 'styled-components'

const Lyric = styled.ul`
  width : 300px;
  list-style : none;

  li {
    background-color : red;
  }
`

export default function Lyrics() {
  const lyric = '가사 가져오기'

  return (
    <Lyric >
        { lyric }
    </Lyric> )
}