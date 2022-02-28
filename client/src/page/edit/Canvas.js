import React, { useState, useRef, useEffect } from "react";
import Draggable, { DraggableCore } from "react-draggable"
import styled from "styled-components";

const Room = styled.div`
    /* position: relative; */
    width: 500px;
    height: 400px;
    left: auto;
    margin: auto;
    border: black 2px solid;
    `

const ElementList = styled.ul`
    display: flex;
    align-items: center;
    width: 800px;
    height: 150px;
    left: auto;
    border-radius: 5px;
    margin: auto;
    padding: 1em;
    background-color: lightgrey;
    margin-top: 50px;
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
    }, [])

    useEffect(() => {
        // console.log("roomPosition", roomPosition)
        // console.log("roomList", roomList);
        // console.log("elem", elem);
        // console.log("startPosition", startPosition);
        // console.log("position", position);
    }, [startPosition, position])

    const trackPosition = (e, data) => {
        setPosition({ x : data.x, y : data.y });
        // console.log(position);
    };

    const dragStartPosition = (e) => {
        // if (startPosition === undefined) 
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
            console.log(e)
            console.log("id", e.target.id);
            console.log(roomPosition.left < e.clientX &&
                e.clientX < roomPosition.right &&
                roomPosition.top < e.clientY &&
                e.clientY < roomPosition.bottom);
            console.log("no");
        }
        else {
            e.target.style.transform = DEFAULT_POSITION;
            setStartPosition(startPosition);
            setPosition({ x : 0, y : 0 });
            console.log(roomPosition.left < e.clientX &&
                e.clientX < roomPosition.right &&
                roomPosition.top < e.clientY &&
                e.clientY < roomPosition.bottom);
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
            defaultPosition={
                JSON.parse(localStorage.getItem(name)) === null 
                ? position : JSON.parse(localStorage.getItem(name))
            }
            onStart={(e, data) => dragStartPosition(e, data)}
            onDrag={(e, data) => trackPosition(e, data)} 
            onStop={(e, data) => dragStopPosition(e, data)}
            key={ idx }
            >
                <Element 
                    ref={nodeRef} 
                    id={ name }
                    >
                    { name }
                    <button onClick={(e) => clickHandler(e)}>
                        close
                    </button>
                </Element>
        </Draggable>
        )

    return (
        <div>
            <Room id="room">
            </Room>
            <ElementList id="elemList">
                { elemList }
            </ElementList>
        </div>
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
    
