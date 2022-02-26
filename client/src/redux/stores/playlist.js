import { ADD_MUSIC, DELETE_MUSIC } from '../actions/playlist'

const initialState =  {
  user : 'test', // 따로 스토어
  nowPlaying : 0,
  playlist : [{
    title : 'test',
    albumImage : 'https://cdn.notefolio.net/img/ea/f0/eaf061b315f6f9e515ea5d49c84ca9d0a0e270a0a50a60c6c3e83a187e5dc112_v1.jpg',
    musician : '테스트유',
    lyrics : 'testLyrics',
    bgImg : 'https://cdn.notefolio.net/img/8d/04/8d043e4b1d6d498da68b95255f79bdc35b2b5897da459cdc442fb94c5aec8738_v1.jpg',
    elements : [{
      id : '1',
      category : 'love',
      coordinate : [0,0]
    }]
  },{
    title : 'test',
    albumImage : 'https://cdn.notefolio.net/img/ea/f0/eaf061b315f6f9e515ea5d49c84ca9d0a0e270a0a50a60c6c3e83a187e5dc112_v1.jpg',
    musician : '테스트유',
    lyrics : 'testLyrics',
    bgImg : 'https://cdn.notefolio.net/img/8d/04/8d043e4b1d6d498da68b95255f79bdc35b2b5897da459cdc442fb94c5aec8738_v1.jpg',
    elements : [{
      id : '1',
      category : 'love',
      coordinate : [0,0]
    }]
  }
],
};

// Reducer
function playlist(state = initialState, action) {
  switch (action.type){
    case ADD_MUSIC :
      return {...state,
        playlist : [...state.playlist,
        action.music
      ]
    };

    case DELETE_MUSIC :
      return {...state, 
        playlist: [...state.playlist.splice(action.index,1)]} ;
    default:
      return state;
      }
} 

export default playlist