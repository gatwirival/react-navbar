import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Events from './pages/events'
import News from './pages/news'
import SupportUs from './pages/supportus'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News/>} />
        <Route path="/supportus" element={<SupportUs/>} />

      </Routes>
    </>
  )
}
export default App