import React from 'react'

import Lyrics from './Lyrics'
import Playlist from './Playlist'
import Room from './Room';

import {styled}  from '@linaria/react';
import { useSelector, useDispatch } from 'react-redux';
import  { deleteMusic }  from '../../redux/actions/playlist'

const GridContainer =  styled.div`
  height:100vh;

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
  // title, image, musician, lyrics, elements
  const {playlist, nowPlaying } = useSelector(state => {
    console.log('state', state)
    return {
    playlist : state.playlist.playlist,
    nowPlaying : state.playlist.nowPlaying,
  }})
  
  console.log('nowPlaying', nowPlaying)
  
  const {title, image, musician,lyrics,elements, bgImg} = {
    title : playlist[nowPlaying].title,
    image : playlist[nowPlaying].albumImage,
    musician : playlist[nowPlaying].musician,    
    lyrics : playlist[nowPlaying].lyrics,
    elements : playlist[nowPlaying].elements,
    bgImg : playlist[nowPlaying].bgImg
  }

  const dispatch = useDispatch();
  const addMusic = () => dispatch(addMusic())  
  const delete_Music = (index) => dispatch(deleteMusic(index))
  
  return (
    <GridContainer style={{backgroundImage:`url(${bgImg})`}}>
        <div style={{gridArea:"header"}}>header</div>
        <Room elements= {elements}/>
        <Lyrics lyrics={lyrics}/>
        <Playlist playlist={playlist} deleteMusic = {delete_Music}/>
    </GridContainer>
    )
}
