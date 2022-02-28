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
  
  const {music, lyrics, bgImg} = {
    music : playlist[nowPlaying],
    lyrics : playlist[nowPlaying].lyrics,
    elements : playlist[nowPlaying].elements,
    bgImg : playlist[nowPlaying].albumImage
  }

  const dispatch = useDispatch();
  const add_Music = (music) => dispatch(addMusic(music))  
  const delete_Music = (index) => dispatch(deleteMusic(index))
  const change_NowPlaying = (index) => dispatch(changeNowPlaying(index))

  return (
    <GridContainer style={{backgroundColor:`white`}}>
        <Header/>
        <SearchBar addMusic={add_Music}/>
        <Room music = {music} nowPlaying={nowPlaying} changeNowPlaying={change_NowPlaying}/>
        <Lyrics lyrics={lyrics}/>
        <Playlist playlist={playlist} deleteMusic = {delete_Music} changeNowPlaying ={change_NowPlaying} nowPlaying = {nowPlaying}/>
    </GridContainer>
    )
}
