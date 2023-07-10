import React from 'react'
import Song from './Song';

function SongList({totalSongs, songClickFun, deletePerm}) {

    return(
        <>
        <h2>Song List</h2>
        <div className="song-list">
           {totalSongs.map((track) => <Song key={track.id} track={track} songClickFun={songClickFun} deletePerm = {deletePerm}/> )}
        </div>
        </>
    );
}

export default SongList;