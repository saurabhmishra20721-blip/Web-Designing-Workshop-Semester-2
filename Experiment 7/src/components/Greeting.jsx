import React from 'react'

const Greeting = (props) => {
  return (
    <div class="Greeting">

        <center><h1>{props.name}</h1></center>
        <br />
        <p>{props.age}</p></div>
  )
}

export default Greeting