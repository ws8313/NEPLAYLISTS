import React, { useEffect, useState } from "react";
import Lyrics from "./Lyrics";
import Playlist from "./Playlist";
import Room from "./Room";
import SearchBar from "./SearchBar";
import Header from "../../component/header/Header";
import Viewer from "../CanvasTest/Viewer";

import { styled } from "@linaria/react";
import { useSelector, useDispatch } from "react-redux";
import {
  addMusic,
  deleteMusic,
  changeNowPlaying,
} from "../../redux/actions/playlist";
import ItemEditor from "../CanvasTest/ItemEditor";
import PlayBtns from "./Room/PlayBtns";

export default function Home() {
  const [edit, setEdit] = useState(false);
  const { playlist, nowPlaying } = useSelector((state) => {
    console.log("state", state);
    return {
      playlist: state.playlist.playlist,
      nowPlaying: state.playlist.nowPlaying,
    };
  });

  const EditBtn = styled.button`
    position:absolute;
    right:0;
    bottom:0;
    height:50px;
    width:300px;
    margin:5px;
  `
  return (
    <div>
      <Header />
      <Viewer edit={edit} />
      {edit ? (
        <ItemEditor />
      ) : (
        <>
          <SearchBar />
          <Lyrics />
          <Playlist />
        </>
      )}
    
          <EditBtn onClick={() =>setEdit(!edit)}>Edit 하기</EditBtn>
    </div>
  );
}
