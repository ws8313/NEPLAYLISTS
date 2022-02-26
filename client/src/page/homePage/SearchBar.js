import React, { useState } from "react";
import { styled } from "@linaria/react";
import searchIcon from '../../asset/search.png'
import axios from 'axios'
const url = 'elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com:5000'

const StyledContainer = styled.div`
  grid-area: search;
  width: 120%;
  text-align: center;
  display: grid;
  grid-template-columns: 10fr 2fr;
  grid-template-rows: 1fr 15fr;
  grid-template-areas:
    "searchbar button"
    "result .";
  color : white;
  form {
    grid-area: searchbar;
    background-color: rgba(0,0,0,0.7);
    input {
      width: 70%;
      border-radius: 20px;
      border: 1px solid #bbb;
      margin: 10px 0;
      padding: 10px 12px;
    }
    padding-bottom: 10px;
  }
  
  button {
    background-color: rgba(0,0,0,0.7);
    border-radius: 0 10px 10px  0;
    i {
      border: solid white;
      border-radius: 3px;
      width: 10px;
      height: 10px;
      
      border-width: 0 5px 5px 0;
      /* border-color: red; */
      display: inline-block;
      padding: 3px;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
      &.show {
        transform: rotate(45deg);
      }
      &.hide {
        transform: rotate(-135deg);
      }
    }
  }
  div {
    height:100%;
    background-color:rgba(0,0,0,0.5);
    li {
      padding: 2px ;
      margin : 5px;
      text-align:left;
      background-color : rgba(0,0,0,0.5);
      border-radius: 10px;
      display : flex;
    h3{
      // 노래 제목이 칸을 넘어설 시 ...으로 표현 
      // +) onMouseOn(정확 x) dkaxms, 암튼 마우스가 올라가 있으면 제목이 Rotation.
      overflow:hidden;
      text-overflow: ellipsis;
      white-space:nowrap;

      width:15vw;
    }
    img { 
      object-fit : cover;
      height : 70px;
      width : 70px;
      margin-right : 7px;
      border-radius : 10px;
    }
  }
    
  }
`;

const ResultList = ({result}) => {
  // 추가하는 버튼(addMusic) 필요
  const resultList = result.map((music) => (
      <li>
        <img></img>
        <div>
         <h3>예시 제목</h3>
        {music}
        </div>
    </li>
    )
  )

  return (
    <div>
     {resultList} 
    </div>
  )
}

export default function SearchBar() {
  const [ searchValue, setSearchValue] = useState('');
  const [ isShow, setIsShow] = useState(false);
  const [ searchResult, setSearchResult ] = useState([0,1])

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post(`${url}/search`, {title:'title'}
      ).then((res)=>{
        console.log(res);
      })
    } catch(e) {
      console.log(e);
    }
  };
  
  return (    
    <StyledContainer opened = {isShow}>
      <button onClick={()=>{setIsShow(!isShow)}}><i className={isShow ? 'hide' : 'show'}></i></button>

      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>{setSearchValue(e.target.value)}}/>
      </form>
      <ResultList result = {searchResult} /> 
            {/* <div className>검색 결과 창</div> */}
    </StyledContainer>
    );
}
