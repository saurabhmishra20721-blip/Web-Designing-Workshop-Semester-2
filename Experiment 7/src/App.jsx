import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './components/Greeting'
import Student from './components/Student'

function App() {
  
  return (
    <>
      <Greeting name={'Student Information'}/>
      <Student name={'Rahul Sharma'} course={'Computer Science'} Marks={85}/><br/>
      <Student name={'Anita Verma'} course={'Information Technology'} Marks={92}/><br/>
      <Student name={'Rohan Gupta'} course={'Electronics'} Marks={78}/> <br/>
    </>
  )
}

export default App