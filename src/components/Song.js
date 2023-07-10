import React from 'react'

function Song({track, songClickFun, deletePerm}) {
const {id, artist, song, image} = track
    return(
        <div className="song" >
            <img src={image} alt={song} onClick={()=>songClickFun(id)}/>
            <div className="song-info">
                <h3>{song}</h3>
                <h4>{artist}</h4>
            </div>
            <button onClick={()=> deletePerm(id)}>X</button>
        </div>
    );
}

export default Song;