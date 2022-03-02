import React, { useState, useRef, useEffect } from "react";
import Draggable, { DraggableCore } from "react-draggable"


import Header from '../../component/header/Header'
import Room from '../homePage/Room';

import { styled } from "@linaria/react";

import { useSelector, useDispatch } from 'react-redux';

window.onload = window.localStorage.clear();

const GridContainer =  styled.div`
    height:100vh;

    background-size : cover;
    background-repeat: no-repeat;

    display:grid;
    grid-template-columns:  1fr 2fr 1fr;
    grid-template-rows: 1fr 10fr 10fr ;
    grid-template-areas:
        "header header header"
        ". main ."
        ". elementlist .";
    
    ::before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        left: 0px;
        bottom: 0px;
        background : url(https://cdn.notefolio.net/img/ea/f0/eaf061b315f6f9e515ea5d49c84ca9d0a0e270a0a50a60c6c3e83a187e5dc112_v1.jpg);
        background-size: cover;
        opacity: 0.7;
        z-index: -1;
    }
`

// const Background = styled.div`
    /* height: 100vh; */
    /* background : url(https://cdn.notefolio.net/img/ea/f0/eaf061b315f6f9e515ea5d49c84ca9d0a0e270a0a50a60c6c3e83a187e5dc112_v1.jpg);
    background-size: cover; */
    
    /* &::before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        left: 0px;
        bottom: 0px;
        background : url(https://cdn.notefolio.net/img/ea/f0/eaf061b315f6f9e515ea5d49c84ca9d0a0e270a0a50a60c6c3e83a187e5dc112_v1.jpg);
        background-size: cover;
        opacity: 0.5;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: -1;
    } */
// `

// // const Room = styled.div`
//     /* position: relative; */
//     width: 500px;
//     height: 400px;
//     left: auto;
//     margin: auto;
//     border: black 2px solid;
// `

const MusicRoom = styled.div`
    grid-area: main;
    display:flex;
    flex-direction: column;

    margin-bottom: 50px;

    .scene {
        margin: auto;
        padding-top: 50px;
        width: 600px;
        height: 600px;
        perspective: 1200px;
        perspective-origin: top right;
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
        /* background-color: green; */
        /* opacity: 0.5; */
        }

    .room__wall-front {
        transform: rotateY(0deg) translateZ(300px);
        }
    .room__wall-right {
        transform: rotateY(90deg) translateZ(300px);
        /* background-color: red; */
        }
    .room__wall-back {
        transform: rotateY(180deg) translateZ(300px) scaleX(-1);

        /* background-color: black; */
        }
    .room__wall-left {
        transform: rotateY(-90deg) translateZ(300px);
        /* background-color: red; */
        }
    .room__wall-top {
        transform: rotateX(90deg) translateZ(300px);

        }
    .room__wall-bottom {
        transform: rotateX(-90deg) translateZ(300px);
        background-color: rgba(0,0,0,0.5);
        border : transparent;
        }
    }
    `;

const ElementList = styled.div`
    display: flex;
    grid-area: elementlist;
    align-items: center;
    width: 1000px;
    height: 200px;
    /* left: auto; */
    border-radius: 10px;
    margin: auto;
    padding: 1em;
    background-color: lightgrey;
    /* margin-top: 50px; */
    `

const Element = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: move;
    color: black;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    /* padding: 1em; */
    margin: auto;
    user-select: none;
    background-color: lightblue;
    `

export default function Canvas() {
    const [startPosition, setStartPosition] = useState();
    const [position, setPosition] = useState({ x : 0, y : 0 });
    const [roomPosition, setRoomPosition] = useState({});
    const [roomList, setRoomList] = useState([]);
    const [selectElem, setSelectElem] = useState();
    const [keyPosition, setKeyPosition] = useState("0 0");
    const [resizeListener, setResizeListener] = useState(null);

    const {playlist, nowPlaying } = useSelector(state => {
        console.log('state', state.playlist.playlist[0].albumImage)
        return {
        playlist : state.playlist.playlist,
        nowPlaying : state.playlist.nowPlaying,
    }})
    
    const nodeRef = useRef(null);

    const DEFAULT_POSITION = "translate(0px, 0px)";

    useEffect(() => {
        const roomContainer = document.getElementById("room");
        const roomRect = roomContainer.getBoundingClientRect();
        setRoomPosition({
            top : roomRect.top,
            left : roomRect.left,
            bottom : roomRect.top + roomRect.height,
            right : roomRect.left + roomRect.width,
        })
    }, [resizeListener])

    useEffect(() => {
        function handleResize() {
            setResizeListener(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    

    useEffect(() => {
        // console.log("roomPosition", roomPosition)
        // console.log("roomList", roomList);
        // console.log("elem", elem);
        // console.log("startPosition", startPosition);
        // console.log("position", position);
        // console.log("selectElem", selectElem)
        console.log(resizeListener, roomPosition)
    }, [position, selectElem, keyPosition])

    const trackPosition = (e, data) => {
        setPosition({ x : data.x, y : data.y });
        // console.log(e.target);
    };

    const dragStartPosition = (e, data) => {
            setSelectElem(e.target.id)
            // console.log()
        
            const originalX = e.clientX;
            const originalY = e.clientY;
            
            setStartPosition({
                id : e.target.id,
                x : originalX,
                y : originalY
            })
            // console.log(originalX, originalY);
            // console.log(startPosition);
            console.log(position);
            console.log(selectElem);
    }

    const dragStopPosition = (e, data) => {
        if (
            roomPosition.left < e.clientX &&
            e.clientX < roomPosition.right &&
            roomPosition.top < e.clientY &&
            e.clientY < roomPosition.bottom
        ) {
            localStorage.setItem(e.target.id, JSON.stringify(position));
            setRoomList(roomList => {
                const newRoomList = [...roomList];
                newRoomList.push({
                    id : e.target.id,
                    x : data.x,
                    y : data.y
                });
                return newRoomList;
            })
            console.log("id", e.target.id);
            console.log(roomPosition.left < e.clientX &&
                e.clientX < roomPosition.right &&
                roomPosition.top < e.clientY &&
                e.clientY < roomPosition.bottom);
            console.log("no");
        }
        else {
            const selectElement = document.getElementById(selectElem);
            // const dragged = document.getElementsByClassName("react-draggable-dragged")[0];
            // const dragging = document.getElementsByClassName("react-draggable-dragging")[0];
            // const draggable = document.getElementsByClassName("react-draggable")[0];
            // data.lastX = 0;
            // data.lastY = 0;
            // data.x = 0;
            // data.y = 0;
            console.log(data);
            // console.log(draggable)
            selectElement.style.transform = DEFAULT_POSITION;
            // dragged.style.transform = DEFAULT_POSITION;
            // dragging.style.transform = DEFAULT_POSITION;
            // draggable.style.transform = DEFAULT_POSITION;
            e.target.style.transform = DEFAULT_POSITION;

            
            console.log(e.target)
            console.log(e.target.id)
            setStartPosition(startPosition);
            setPosition({ x : 0, y : 0 });
            console.log(roomPosition.left < e.clientX &&
                e.clientX < roomPosition.right &&
                roomPosition.top < e.clientY &&
                e.clientY < roomPosition.bottom);
            localStorage.removeItem(e.target.id);
            setKeyPosition(`${data.x}` + ` ${data.y}`)
            console.log("ok");
            }
    }

    const clickHandler = (e) => {
        e.target.parentNode.style.transform = DEFAULT_POSITION;
        localStorage.removeItem(e.target.parentNode.id);
    }

    
    const elem = ["elem1", "elem2", "elem3", "elem4", "elem5"];
    const elemList = elem.map((name, idx) => 
        <Draggable
            nodeRef={nodeRef} 
            key={ idx + keyPosition }
            defaultPosition={
                JSON.parse(localStorage.getItem(name)) === null 
                ? position : JSON.parse(localStorage.getItem(name))
            }
            onStart={(e, data) => dragStartPosition(e, data)}
            onDrag={(e, data) => trackPosition(e, data)} 
            onStop={(e, data) => dragStopPosition(e, data)}
            >
                <Element 
                    ref={nodeRef} 
                    id={ name }
                    >
                    { name }
                    {/* <button onClick={(e) => clickHandler(e)}>
                        close
                    </button> */}
                </Element>
        </Draggable>
        )

    return (
        <GridContainer style={{}}>
            <Header/>
            <MusicRoom>
            {/* <Room id="room">
            </Room> */}
            {/* <Room /> */}
            <div className="scene">
                <div id="room" className="room">
                <div className="room__wall room__wall-top" />
                <div className="room__wall room__wall-bottom"/>
                <div className="room__wall room__wall-left"/>
                <div className="room__wall room__wall-right"/>
                <div className="room__wall room__wall-back" style={{ background : `url(https://cdn.notefolio.net/img/ea/f0/eaf061b315f6f9e515ea5d49c84ca9d0a0e270a0a50a60c6c3e83a187e5dc112_v1.jpg)`, backgroundSize: 'contain'}}/>
            </div>
        </div>
        </MusicRoom>
            <ElementList id="elemList">
                { elemList }
            </ElementList>
        </GridContainer>

    )
    // return (
    //     <div>
    //         <Room></Room>
    //         <ElementList>
    //             <Draggable 
    //                 nodeRef={nodeRef} 
    //                 onDrag={(e, data) => trackPosition(e, data)} 
    //                 defaultPosition={
    //                     JSON.parse(localStorage.getItem("element")) === null 
    //                     ? position : JSON.parse(localStorage.getItem("element"))
    //                 }
    //                 onStop={(e) => dragstopPosition(e)}
    //                 >
    //                 <Element 
    //                     ref={nodeRef} 
    //                     id="elem1"
    //                     onClick={(e) => clickHandler(e)}
    //                     >
    //                     {/* <div id="elem1" onClick={(e) => clickHandler(e)}> */}
    //                         Box
    //                         {/* <div>x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}</div> */}
    //                     {/* </div> */}
    //                 </Element>
    //             </Draggable>
    //         </ElementList>
    //     </div>
    // );
}
    
