import React from 'react'

function Card(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.year}</p>
        <p>{props.type}</p>
    </div>
  )
}

export default Card