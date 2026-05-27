import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Greeting from "./components/Greeting";
import Students from "./components/Students";

function App() {
 

  return (
    <>
      <Greeting name={'student Information'} />
      <Students name={'Rahul Sharma'} course={'Computer Science'}  marks={'85'} /> <br/>
      <Students name={'Anita Verma'} course={'Iformation Technology'}  marks={'92'} /><br/>
      <Students name={'Rohan Gupta'} course={'Electronics'}  marks={'78'} /><br/>
    </>
  );
}

export default App;
