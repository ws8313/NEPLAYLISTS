//Action
export const ADD_MUSIC = 'ADD_MUSIC'
export const DELETE_MUSIC = 'DELETE_MUSIC'
export const CHANGE_NOWPLAYING = 'CHANGE_NOWPLAYING'

//Action Creators
export const addMusic = (music) => {
  return {
  type: ADD_MUSIC,
  music 
}}

export const deleteMusic = (index) => { 
  return {
  type : DELETE_MUSIC,
  index
}}

export const changeNowPlaying = (index) => {
  return {
    type : CHANGE_NOWPLAYING,
    index
  }
}