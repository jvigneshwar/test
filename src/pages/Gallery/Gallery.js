import React, { useEffect } from 'react'
import "./Gallery.css"
import { useNavigate } from 'react-router-dom'

const Gallery = () => {

  const navigate = useNavigate();

  useEffect(() => {

    fetch(`https://api.cloudinary.com/v1_1/dqwfvbure/resources/dcollabPosts`, {
      headers: {
        Authorization: `Basic ${('962853429899996:TmoVSB3haO9qS5-cpmykjuDW18M').toString('base64')}`
      }
    })
    .then(r => r.json())
    .then(d => console.log(d))
    .catch(e => console.log(e))

  }, [])

  return (
    <div>
      <button onClick={() => { navigate(-1) }}>back</button>
      Gallery
    </div>
  )
}

export default Gallery