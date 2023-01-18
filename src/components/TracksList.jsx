import React from 'react';
import Track from './Track';

function TracksList({tracks}) {
  const tracksList = tracks.map(track => {
    return (
      <Track key={track.id} {...track} />
    )
  })

  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {/* render a list of <Track> components here */}
        {tracksList}
      </tbody>
    </table>
  )
}

export default TracksList