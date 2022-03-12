import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import ReactPlayer from "react-player";

export default function PlayBox({music}) {
  const [isShow, setIsShow] = useState(true);
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "350px",
        border : " 2px #ffa500 solid", 
        borderRadius:"5px 5px 0 0",
      }}
    >
      <button
        className={"searchToggleBtn"}
        onClick={() => {
          setIsShow(!isShow);
          console.log(isShow);

        }}
        style={{
          backgroundColor: "rgba(50,50,50,0.5)",
          color:"white",
          width:"100%",
          borderRadius:"5px 5px 0 0",
          height:"15px",
        }}
      >
        {isShow ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </button>

      <ReactPlayer
        width={"100%"}
        height={isShow? "0":"100%"}
        url={
          "https://www.youtube.com/watch?v=d96qZ_qeqJs&list=RDd96qZ_qeqJs&start_radio=1"
          // music.audio
        }
        playing = {false}
        controls={true}
      ></ReactPlayer>
    </div>
  );
}
