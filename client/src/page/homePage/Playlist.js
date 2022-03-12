import React, { useState } from "react";
import { styled } from "@linaria/react";
import { AiFillCaretRight, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setNowPlaying,
  deleteMusic,
  setCategory,
} from "../../redux/actions/playlist";
import axios from "axios";
import { GrPowerCycle } from "react-icons/gr";

const MusicContainer = styled.ul`
  ::-webkit-scrollbar {
    width: 5.2px;
  } /* 스크롤 바 */
  ::-webkit-scrollbar-track {
    background-color: black;
  } /* 스크롤 바 밑의 배경 */
  ::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
  } /* 실질적 스크롤 바 */
  ::-webkit-scrollbar-thumb:hover {
    background: #404040;
  } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
  ::-webkit-scrollbar-thumb:active {
    background: #808080;
  } /* 실질적 스크롤 바를 클릭할 때 */

  box-sizing: border-box;
  position: absolute;
  bottom: 50px;
  right: 0;
  width: 300px;
  height: 40%;

  background-color: rgba(0, 0, 0, 0.5);
  border: 1px #ffa500 solid;
  border-radius: 10px;
  color: white;
  margin: 10px 5px;
  list-style: none;
  line-height: 1;
  overflow: auto;
  vertical-align: center;

  li {
    padding: 2px;
    margin: 5px;
    text-align: left;
    background-color: rgba(70, 70, 70, 0.7);
    padding: 5px;
    border-radius: 10px;
    display: flex;
    div {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;

      h3 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    img {
      object-fit: cover;
      height: 50px;
      width: 50px;
      margin-right: 7px;
      border-radius: 10px;
    }

    button {
      margin: auto;
      background-color: rgba(50, 50, 50, 0.7);
      color: white;
      height: 40px;
      width: 40px;
      border-radius: 10px;
      font-size: xx-large;
      path {
        stroke: rgba(150, 150, 150, 1);
        margin : auto;
      }
      * {
        margin: auto;
      }
    }
  }
`;

const url =
  "http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com"; //http 없으면 404 error

const MusicCard = ({
  music,
  idx,
  delete_Music,
  set_NowPlaying,
  set_Category,
}) => {
  const handleDelete = (idx) => {
    const deleteConfirm = window.confirm(
      "정말로 플레이리스트에서 삭제하시겠습니까? 삭제 시 편집한 해당 곡의 Room 정보는 초기화 됩니다."
    );
    if (deleteConfirm) {
      delete_Music(idx);
    }
  };

  const [isAnalyzed, setIsAnalyzed] = useState(false);
  console.log("is",music.id);
  // if(music.id != -1 ) {
  // const analyzeLyrics = setInterval(function () {
  //   axios
  //     .get(`${url}/api/analysis/${music.id}`, { timeout: 20000 })
  //     .then((res) => {
  //       // if (res.data.state) {
  //         // 플레이리스트에 카테고리 넣는 dispatch
  //         // set_Category(idx, res.data.category);
  //         console.log(res);
  //         setIsAnalyzed(true);
  //         clearInterval(analyzeLyrics);
  //       })
  //     }, 10000);
  // });
  // }
  return (
    <li>
      <img src={music.albumImage} />
      <div>
        <h3>{music.title}</h3>
        {music.musician}
      </div>
      {isAnalyzed ? (
        <button onClick={() => set_NowPlaying(idx)}>
          <AiFillCaretRight />
        </button>
      ) : (
        <button disabled>
          <GrPowerCycle color="white" />
        </button>
      )}
      <button onClick={() => handleDelete(idx)}>
        <AiOutlineClose />
      </button>
    </li>
  );
};

export default function Playlist() {
  const dispatch = useDispatch();

  const delete_Music = (idx) => dispatch(deleteMusic(idx));
  const set_NowPlaying = (idx) => dispatch(setNowPlaying(idx));
  const set_Category = (idx, category) =>
    dispatch(setCategory({ idx: idx, category: category }));
  const { playlist, nowPlaying } = useSelector((state) => {
    return {
      playlist: state.playlist.playlist,
      nowPlaying: state.playlist.nowPlaying,
    };
  });

  const PlayLists = () => {
    return (
      <>
        {playlist.map((music, idx) => (
          <MusicCard
            music={music}
            idx={idx}
            delete_Music={delete_Music}
            set_NowPlaying={set_NowPlaying}
            set_Category={set_Category}
          />
        ))}
      </>
    );
  };

  return (
    <MusicContainer>
      <PlayLists />
    </MusicContainer>
  );
}
