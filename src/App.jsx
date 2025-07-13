import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Contact from './Components/Contact'
import Jokes from './Components/Jokes'
import Clock from './Components/Clock'
import Navbar from './Components/Nav';
import ToDo from './Components/taskManager'
import Counter from './Components/Counter'
import More from './Components/More'
import TicTacToe from './Components/TicTacToe';
import Weather from './Components/Weather';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Jokes" element={<Jokes/>}/>
        <Route path="/Clock" element={<Clock/>}/>
        <Route path="/ToDo" element={<ToDo/>}/>
        <Route path="/Counter" element={<Counter/>}/>
        <Route path="/More" element={<More/>}/>
        <Route path="/TicTacToe" element={<TicTacToe/>}/>
        <Route path="/Weather" element={<Weather/>}/>
        {/* <Route path="/" element={<XYZ/>}/> */}
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
