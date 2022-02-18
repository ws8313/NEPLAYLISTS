//Action
const ADD_MUSIC = 'ADD_MUSIC'
const DELETE_MUSIC = 'ADD_MUSIC'

//Action Creators
const addMusic = ()=>({
  type:ADD_MUSIC,
  music  
})

const deleteMusic = ()=>({
  type : DELETE_MUSIC,
  index
})


const initialState = {
  user : '',
  playlist : [{
    music : 'test',
    lyric : 'testLyrics',
    elements : [{
      id : '1',
      category : 'love',
      coordinate : [0,0]
    }]
  }],
};

export default function playlistSetter(state = initialState, action) {
  switch (action.type){
    case ADD_MUSIC :
      return {
        ...state,
        
      }
  }
} 