import React, {useEffect, useState} from 'react'
import Lyrics from './Lyrics'
import Playlist from './Playlist'
import Room from './Room';
import SearchBar from './SearchBar';
import Header from '../../component/header/Header'
import Viewer from '../CanvasTest/Viewer';

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
  const {playlist, nowPlaying } = useSelector(state => {
    console.log('state', state)
    return {
    playlist : state.playlist.playlist,
    nowPlaying : state.playlist.nowPlaying,
  }})
  
  return (
    <GridContainer style={{backgroundColor: "#292d2f"}}>
        <Header/>
        <Viewer />
        <SearchBar />
        <Lyrics />
        <Playlist />
    </GridContainer>
    )
}
