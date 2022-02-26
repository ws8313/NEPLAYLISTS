//Action
export const ADD_MUSIC = 'ADD_MUSIC'
export const DELETE_MUSIC = 'DELETE_MUSIC'

//Action Creators
export const addMusic = (music) => {
  return {
  type: ADD_MUSIC,
  music : music //객체  
}}

export const deleteMusic = (index) => { 
  return {
  type : DELETE_MUSIC,
  index
}}

//type은 import 해서 쓰고, 액션이랑 type 같이 넣어라.

// 초기 state. 불필요할지도?
