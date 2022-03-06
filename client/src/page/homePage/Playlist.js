import React from "react";
import { styled } from "@linaria/react";
import {
  AiFillCaretRight,
  AiOutlineClose,
  AiOutlineScissor,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNowPlaying, deleteMusic } from "../../redux/actions/playlist";

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
  position:absolute;
  bottom:0;
  right:0;
  width:300px;
  height:50%;

  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: white;
  margin: 5px;
  list-style: none;
  line-height: 1;
  overflow: auto;
  vertical-align: center;

  li {
    padding: 2px;
    margin: 5px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    display: flex;
    div{
      width:100%;
      h3 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }}
    img {
      object-fit: cover;
      height: 50px;
      width: 50px;
      margin-right: 7px;
      border-radius: 10px;
    }

    button {
      margin:auto;
      background-color: rgba(50, 50, 50, 0.7);
      color: white;
      height: 40px;
      width: 40px;
      border-radius: 10px;
      font-size: xx-large;
      * {
        margin: auto;
      }
    }
  }
`;

const MusicCard = ({
  music,
  idx,
  delete_Music,
  set_NowPlaying,
  moveToEditPage}
) => {
  const handleDelete = (idx) => {
    const deleteConfirm = window.confirm(
      "정말로 플레이리스트에서 삭제하시겠습니까? 삭제 시 편집한 해당 곡의 Room 정보는 초기화 됩니다."
    );
    if (deleteConfirm) {
      delete_Music(idx);
    }
  };
  console.log(music);
  return (
    <li>
      <img src={music.albumImage} />
      <div>
        <h3>{music.title}</h3>
        {music.musician}
      </div>
      <button onClick={() => set_NowPlaying(idx)}>
        <AiFillCaretRight />
      </button>
      <button onClick={() => moveToEditPage(music, idx)}>
        <AiOutlineScissor />
      </button>
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

  const { playlist, nowPlaying } = useSelector((state) => {
    return {
      playlist: state.playlist.playlist,
      nowPlaying: state.playlist.nowPlaying,
    };
  });

  const navigate = useNavigate();

  const moveToEditPage = (music, idx) => {
    navigate("/edit/", {
      state: [music, idx],
    });
  };

  const PlayLists = () => {
    return (
      <>
        {playlist.map((music, idx) => (
          <MusicCard
            music={music}
            idx={idx}
            delete_Music={delete_Music}
            set_NowPlaying={set_NowPlaying}
            moveToEditPage={moveToEditPage}
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

  // anti-pattern
  // camelcase playList
  // jsx를 return 하는 함수나 객체는 무조건 대문자로 시작해야 합니다.
  // component는 무조건 component가 리턴해야합니다.