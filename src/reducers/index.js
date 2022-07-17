import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Barbie Girl', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'No Scrubs', duration: '5.01' },
    { title: 'Come as you are', duration: '3.48' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  // else
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
