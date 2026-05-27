import React from 'react'

const Student = (props) => {
  return (
    <div class="Student">

        <center>
        <h2>{props.name}</h2>
        <p>Course: {props.course}</p>
        <p>Marks: {props.Marks}</p>
        </center>
    </div>
  )
}

export default Student