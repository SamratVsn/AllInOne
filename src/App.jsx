import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Contact from './Components/Contact'
import Jokes from './Components/Jokes'
import Clock from './Components/Clock'
import Navbar from './Components/Nav';
import ToDo from './Components/taskManager'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Jokes" element={<Jokes/>}/>
        <Route path="/Clock" element={<Clock/>}/>
        <Route path="/ToDo" element={<ToDo/>}/>
        {/* <Route path="/" element={<XYZ/>}/> */}
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
