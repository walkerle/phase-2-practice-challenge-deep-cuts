import React, { useState } from 'react'

function AddTrackForm({onFormSubmit}) {
  const initialForm = {
    title: "",
    artist: "",
    BPM: "",
    image: ""
  }

  const [formData, setFormData] = useState(initialForm)

  function handleFormInput(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }
    fetch('http://localhost:8001/tracks', config)
    .then(res => res.json())
    .then(trackObj => onFormSubmit(trackObj))
  }

  return (
      <form onSubmit={handleFormSubmit} >
        <div>
          <input
            value={formData.image}
            type="text"
            name="image" 
            placeholder="Image URL"
            onChange={handleFormInput}
          />
          <input
            value={formData.title}
            type="text"
            name="title"
            placeholder="title"
            onChange={handleFormInput}
          />
          <input
            value={formData.artist}
            type="text" 
            name="artist"
            placeholder="Artist"
            onChange={handleFormInput}
          />
          <input
            value={formData.BPM}
            type="number"
            name="BPM"
            placeholder="BPM"
            step="1.00"
            onChange={handleFormInput}
          />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm