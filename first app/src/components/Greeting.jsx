import React from 'react'

const Greeting = ({name,age}) => {
  return (
    <div>
    <h1>{name}</h1>
    <br></br>
    <p>{age}</p>
    </div>
  )
}

export default Greeting
