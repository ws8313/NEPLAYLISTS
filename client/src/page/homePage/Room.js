import React from "react";
import {styled}  from '@linaria/react';

const MusicRoom = styled.div`
  grid-area: main;
  display: flex;
  margin: auto;
  text-align: center;

  justify-content: center;
  align-items: center;

  // 곡 변경 화살표
  button {
    margin: 50px;
    height: 30%;
    background-color: transparent;
    border: transparent;
    i {
      border: solid black;
      width: 10px;
      height: 10px;

      border-width: 0 5px 5px 0;
      border-color: white;
      display: inline-block;
      padding: 3px;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
      &.right {
        transform: rotate(-45deg);
      }
      &.left {
        transform: rotate(135deg);
      }
    }
  }
  .scene {
    width: 400px;
    height: 400px;
    perspective: 1200px;
    perspective-origin: top;
    /* background-color:red; */
    .room {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transform: translateZ(-100px);
    }
    .room__wall {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: green;
      opacity: 0.5;
    }

    .room__wall-front {
      transform: rotateY(0deg) translateZ(200px);
      background-color: white;
    }
    .room__wall-right {
      transform: rotateY(90deg) translateZ(200px);
      background-color: red;
    }
    .room__wall-back {
      transform: rotateY(180deg) translateZ(200px);
      background-color: black;
    }
    .room__wall-left {
      transform: rotateY(-90deg) translateZ(200px);
      background-color: red;
    }
    .room__wall-top {
      transform: rotateX(90deg) translateZ(200px);
    }
    .room__wall-bottom {
      transform: rotateX(-90deg) translateZ(200px);
    }
  }
`;

export default function Room({setNowPlaying, nowPlaying}) {
  const handleClick = (direction) => {
    console.log(direction);
       //플레이리스트의 다음 음악으로 변경
     if (direction == 'right') {
      setNowPlaying(nowPlaying+1)
    } else {
      setNowPlaying(nowPlaying-1)
    }
  }

  return (
    <MusicRoom>
      <button>
        <i className="left" onClick={()=>handleClick("left")}/>
      </button>

      <div className="scene">
        <div className="room">
          <div className="room__wall room__wall-top">top</div>
          <div className="room__wall room__wall-bottom">btm</div>
          <div className="room__wall room__wall-left">left</div>
          <div className="room__wall room__wall-right">right</div>
          <div className="room__wall room__wall-back">back</div>
        </div>
      </div>

      <button>
        <i className="right" onClick={()=>handleClick("right")} />
      </button>
    </MusicRoom>
  );
}
