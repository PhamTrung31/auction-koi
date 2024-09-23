import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header.jsx'
import Home from './Home.jsx'
import Login from './Login/Login.jsx'
import About from './About.jsx'
import Register from './Register/Register.jsx'
import CurrentAuction from './CurrentAuction.jsx'
import PastAuction from './PastAuction.jsx'
import DemoAxios from './components/DemoAxios.jsx';
import Footer from './Footer/Footer.jsx';


function App() {

  return (
    <Router>
      <div className='body'>
        <Header />
        <div className='body-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/currentAuction" element={<CurrentAuction />} />
            <Route path="/pastAuction" element={<PastAuction />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
