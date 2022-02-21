//Action
const ADD_MUSIC = 'ADD_MUSIC'
const DELETE_MUSIC = 'DELETE_MUSIC'

//Action Creators
function addMusic(music) {
  return {
  type:ADD_MUSIC,
  music : music //객체  
}}

function deleteMusic(index) { 
  return {
  type : DELETE_MUSIC,
  index : index
}}


// 초기 state. 불필요할지도?
const initialState =  {
  user : '',
  playlist : [{
    title : 'test',
    image : '',
    musician : '',
    lyrics : 'testLyrics',
    elements : [{
      id : '1',
      category : 'love',
      coordinate : [0,0]
    }]
  }],
};


// Reducer
function playlist(state = initialState, action) {
  switch (action.type){
    case ADD_MUSIC :
      return [...state.playlist,
        action.music
      ]
    case DELETE_MUSIC :
      return state.playlist.splice(action.index,1) 

    default:
      return state;
      }
} 


export default playlist


//Store
