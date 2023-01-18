import React, { useState, useEffect } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {

  const [ tracks, setTracks ] = useState([]);
  const [ search, setSearch ] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8001/tracks`)
    .then(res => res.json())
    .then(tracksObj => setTracks(tracksObj))
  }, [])

  function onFormSubmit(trackObj) {
    // console.log('onFormSubmit')
    setTracks([...tracks, trackObj]);
  }

  const tracksToDisplay = tracks.filter(track => {
    return track.title.toLowerCase().includes(search.toLowerCase()) ||
    track.artist.toLowerCase().includes(search.toLowerCase())
  })
    
  return (
    <div>
      <Search setSearch={setSearch} />
      <AddTrackForm onFormSubmit={onFormSubmit} />
      <TracksList tracks={tracksToDisplay} />
    </div>
  )
}

export default TracksPage