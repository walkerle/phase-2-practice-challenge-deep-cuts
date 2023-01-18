import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({title, artist, BPM, image=defaultVinyl}) {
  // console.log({title});
  // console.log({artist});
  // console.log({BPM});
  // console.log({image});
  return (
    <tr className="table-row">
        <td className="row-image">
            {/* you can use the default image if no image is given */}
            <img src={image} alt="title" />
        </td>
        <td className="row-title">{title}</td>
        <td>{artist}</td>
        <td>{BPM}</td>
    </tr>
  )
}

export default Track