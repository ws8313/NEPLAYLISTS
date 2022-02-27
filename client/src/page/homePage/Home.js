import React, {useEffect, useState} from 'react'

import Lyrics from './Lyrics'
import Playlist from './Playlist'
import Room from './Room';
import SearchBar from './SearchBar';
import Header from '../../component/header/Header'

import {styled}  from '@linaria/react';
import { useSelector, useDispatch } from 'react-redux';
import  { addMusic, deleteMusic, changeNowPlaying }  from '../../redux/actions/playlist'

const GridContainer =  styled.div`
  height:100vh;

  background-size : cover;
  background-repeat: no-repeat;
  
  display:grid;
  grid-template-columns:  1fr 2fr 1fr;
  grid-template-rows: 1fr 10fr 10fr ;
  grid-template-areas:
    "header header header"
    "search main lyrics"
    "search main playlist";
`

export default function Home() {
  // title, image, musician, lyrics, elements
  const {playlist, nowPlaying } = useSelector(state => {
    console.log('state', state)
    return {
    playlist : state.playlist.playlist,
    nowPlaying : state.playlist.nowPlaying,
  }})
  
  const {title, image, musician,lyrics,elements, bgImg} = {
    title : playlist[nowPlaying].title,
    image : playlist[nowPlaying].albumImage,
    musician : playlist[nowPlaying].musician,    
    lyrics : playlist[nowPlaying].lyrics,
    elements : playlist[nowPlaying].elements,
    bgImg : playlist[nowPlaying].bgImg
  }

  const dispatch = useDispatch();
  const add_Music = (music) => dispatch(addMusic(music))  
  const delete_Music = (index) => dispatch(deleteMusic(index))
  const change_NowPlaying = (index) => dispatch(changeNowPlaying(index))

  return (
    <GridContainer style={{backgroundImage:`url(${bgImg})`}}>
        <Header/>
{/* x        <Player url = {"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"}/> */}
        <SearchBar addMusic={add_Music}/>
        <Room elements= {elements} nowPlaying={nowPlaying} setNowPlaying={change_NowPlaying}/>
        <Lyrics lyrics={lyrics}/>
        <Playlist playlist={playlist} deleteMusic = {delete_Music} changeNowPlaying ={change_NowPlaying} nowPlaying = {nowPlaying}/>
    </GridContainer>
    )
}
