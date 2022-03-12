import React, { useState } from "react";
import { styled } from "@linaria/react";

import axios from "axios";

import {AiFillCaretDown,AiFillCaretUp} from "react-icons/ai";
const proxy = 'https://cors-anywhere.herokuapp.com/'
const url = "http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com"; //http 없으면 404 error
const StyledContainer = styled.div`
  grid-area: search;
  text-align: center;
  color: white;

  form {
    border-radius: 10px;

    background-color: rgba(0, 0, 0, 0.7);
    input {
      width: 70%;
      border-radius: 20px;
      border: 1px solid #bbb;
      margin: 30px 10px ;
      padding: 5px;
    }
    margin-bottom: 30px;
  }

  .searchToggleBtn {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 0 0 10px 10px;
    width : 100%;
    height : 15px;
    color:white;
  }

  .searchResultContainer {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px 10px 0 0;
    height:95%;
  }
  
  ul {
    border-radius: 10px;
    /* background-color: rgba(0, 0, 0, 0.5); */

    li {
      
      padding: 2px;
      margin: 5px;
      text-align: left;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      display: flex;

      .addMusicBtn {
        background-color:rgba(50,50,50,0.7);
        color:white;
        height:50px;
        width:50px;
        border-radius: 10px;
        font-size: xx-large;
        margin:auto;
      }

      h3 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        width: 15vw;
      }
      img {
        object-fit: cover;
        height: 60px;
        width: 60px;
        margin-right: 7px;
        border-radius: 10px;
      }
    }
  }
`;

const ResultList = ({ result, addMusic }) => {
  const resultList = result.map((music) => (
    <li>
      <img src = {music.albumImage}/>
      <div>
        <h3 className="title">{music.title}</h3>
        {music.musician}
      </div>
      <button className="addMusicBtn" onClick={()=>addMusic(music)}>+</button>
    </li>
  ));

  return <ul>{resultList}</ul>;
};

export default function SearchBar({addMusic}) {
  const [searchValue, setSearchValue] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [searchResult, setSearchResult] = useState([
  ]);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      axios.post(`${url}/search`,{title:searchValue}, { headers : {'Content-Type': 'multipart/form-data'} })
      .then((res)=>{
        setSearchResult(res.data.searchlist)
      })
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledContainer>
      { isShow? 
      <div className="searchResultContainer">
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => {setSearchValue(e.target.value);}}/>
        </form>
        <ResultList result={searchResult} addMusic={addMusic} />
      </div> : <></>}
      <button className={'searchToggleBtn'} onClick={() => {setIsShow(!isShow);}}>
        {isShow ?  <AiFillCaretUp/>:<AiFillCaretDown/>}
      </button>
    </StyledContainer>
  );
}