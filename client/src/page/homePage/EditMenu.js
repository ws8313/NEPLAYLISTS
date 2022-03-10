import { styled } from "@linaria/react";
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { onOffElement, savePosition } from "../../redux/actions/canvas";

const ItemEditorContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 45px;
  width: 260px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 20px;
  overflow: hidden;
  margin: 5px;
  .elementsList {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .elementCard {
      flex-grow: 0;
      width: 45%;
      box-sizing: border-box;
      height: 150px;
      border: 1px black solid;
      align-items: center;
      font-size: large;
      text-align: center;
      margin: 5px;
      .img {
        width: 100%;
        background-color: red;
        height: 100px;
      }
      button {
        width: 100%;
      }
    }
  }
`;

export default function EditMenu() {
  const dispatch = useDispatch();
  const on_Off_Element = (index) => dispatch(onOffElement(index));
  
  const {onNOff} = useSelector((state)=>{
    return {
      onNOff : state.canvas.onNOff
    }
  })

  const onNOffSwitch = (index)=>{
    on_Off_Element(index)
    console.log(1);
  }
  const ElementBox = ({ element, index }) => {
    // onNOff[index] 
    console.log(1);
    const onNOffSwitch = (index)=>{
      on_Off_Element(index)
      console.log(1);
    }
    return (
      <div className="elementCard">
        <div className="img"></div>
        이름
        <button onClick={()=>onNOffSwitch(index)}> {onNOff[index] ? "삭제" : "추가"}</button>
      </div>
    );
  };

  return (
    <ItemEditorContainer>
      <h3>Elements</h3>
      <div className="elementsList">
        <ElementBox index="0"></ElementBox>
        <ElementBox index="1"></ElementBox>
        <ElementBox index="2"></ElementBox>
        <ElementBox index="3"></ElementBox>
      </div>
    </ItemEditorContainer>
  );
}
//ElementBox에 redux로 element 가져와서 넣어야 함
