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

const GridContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
`;

export default function Home() {
  const [edit, setEdit] = useState(false);
  const { playlist, nowPlaying } = useSelector((state) => {
    console.log("state", state);
    return {
      playlist: state.playlist.playlist,
      nowPlaying: state.playlist.nowPlaying,
    };
  });

  return (
    <GridContainer style={{ backgroundColor: "#292d2f" }}>
      <Header />
      {/* <Room /> */}

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
    </GridContainer>
  );
}
