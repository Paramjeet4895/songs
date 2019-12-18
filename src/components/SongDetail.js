import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>SELECT A SONG</div>
    }
    return (
        <div>
        <h4>DETAILS FOR:</h4>
        <p> TITLE :{song.title}
        <br/>
          DURATION:{song.duration}</p>
        </div>
  );
};
const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);