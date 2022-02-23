import React from 'react'
import Lyrics from './Lyrics'
import Playlist from './Playlist'
import styled  from 'styled-components';
import Room from './Room';
import img from './pexels-nout-gons-248159.jpg'

const GridContainer =  styled.div`
  height:100vh;
  background-image : url(${img});
  background-size : cover;
  background-repeat: no-repeat;
  
  display:grid;
  grid-template-columns:  1fr 2fr 1fr;
  grid-template-rows: 1fr 10fr 10fr ;
  grid-template-areas:
    "header header header"
    "a main lyrics"
    "a main playlist";
`

export default function Home() {
  return (
    <GridContainer>
        <div style={{gridArea:"header"}}>header</div>
        <Room/>
        <Lyrics />
        <Playlist/>
    </GridContainer>
    )
}
