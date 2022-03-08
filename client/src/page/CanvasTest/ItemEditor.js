import { styled } from "@linaria/react";
import React from "react";

const ItemEditorContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50px;
  width: 260px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 20px;
  overflow: hidden;
  .elementsList {
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    .elementCard {
      flex-grow: 0;
      width: 45%;
      box-sizing: border-box;
      height: 150px;
      border: 1px black solid;
      align-items: center;
      font-size: large;
      text-align: center;
      margin:  5px;
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

const ElementBox = () => {
  const isAppended = true;
  return (
    <div className="elementCard">
      <div className="img"></div>
      이름
      <button> {isAppended ? "추가" : "삭제"}</button>
    </div>
  );
};

export default function ItemEditor() {
  return (
    <ItemEditorContainer>
      <h3>Elements</h3>
      <div className="elementsList">
        <ElementBox></ElementBox>
        <ElementBox></ElementBox>
        <ElementBox></ElementBox>
        <ElementBox></ElementBox>
      </div>
    </ItemEditorContainer>
  );
}
