///Action Creator////
export const selectSong = song =>{
    ///Return An action
    return{
      type:'SONG_SELECTED',
      payload:song
    };
};