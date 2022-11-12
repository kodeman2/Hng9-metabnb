import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PlaceToStay from './pages/PlaceToStay'


import './App.css'

export default function App() {
 
  return (
    <h1 className="App">
      <Router>
      
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/placetostay" element={<PlaceToStay />} />
      </Routes>

    <Footer />
    </Router>
  </h1>
  )
}


