import {combineReducers} from 'redux';
const songsReducer= () =>{
    return [
        {title:'One love',duration:'4:05'},
        {title:'Got My eyes on you',duration:'2:05'},
        {title:'Baby',duration:'1:05'},
        {title:'Down',duration:'3:05'},
    ];
};

const selectedSongReducer= (selectedSong =null,action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})