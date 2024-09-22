import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx'
import Login from './Login.jsx'
import About from './About.jsx'
import Register from './Register.jsx'
import CurrentAuction from './CurrentAuction.jsx'
import PastAuction from './PastAuction.jsx'


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/currentAuction" element={<CurrentAuction />} />
        <Route path="/pastAuction" element={<PastAuction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
