import React, { useState,useEffect } from 'react'
import SongList from './SongList';
import Setlist from './Setlist';

function SetlistBuilder() {

    const [totalSongs, setTotalSongs] = useState([])
    const [setlistArray, setSetlistArray] = useState([])

    useEffect(() => {
        fetch(`  http://localhost:3110/tracks`)
        .then(r => r.json())
        .then(d => setTotalSongs(d))
    },[])

    function addToSetList(id) {
        let clicked = totalSongs.find((song) => song.id === id)
        if (setlistArray.find((song) => song.id ===id)) { return null 
        } else { setSetlistArray([...setlistArray, clicked])} 
    }
 
    function removeFromSetList(id) {
        setSetlistArray(setlistArray.filter((track) => track.id !== id))
    }

    function deletePerm(id) {
        setTotalSongs(totalSongs.filter((track) => track.id !== id))

        fetch(`http://localhost:3110/tracks/${id}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json'
                }
                })
                    }

    function alert() {
       alert("hello")
    }

    return(
        <div className="builder">
            <SongList totalSongs={totalSongs} songClickFun={addToSetList} deletePerm ={deletePerm}/>
            <div className="vl"></div>
            <Setlist setlistArray={setlistArray} songClickFun={removeFromSetList} deletePerm={removeFromSetList}/>
        </div>
    );
}

export default SetlistBuilder;