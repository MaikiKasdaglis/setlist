import React from 'react'
import Song from './Song';

function Setlist({setlistArray, songClickFun, deletePerm}) {

    return(
        <>
        <h2>Setlist</h2>
        <div className="setlist">
            {setlistArray.map((track) => <Song key={track.id} track={track} songClickFun={songClickFun} deletePerm={deletePerm}/>)}
        </div>
        </>
    );
}

export default Setlist;