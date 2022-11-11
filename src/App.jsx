import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'


import './App.css'

export default function App() {
 
  return (
    <h1 className="App">
      <Router>
      
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>

    <Footer />
    </Router>
  </h1>
  )
}


