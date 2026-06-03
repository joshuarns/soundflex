import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Applications from './pages/Applications'
import Contact from './pages/Contact'
import Specs from './pages/Specs'
import './styles.css'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/specs" element={<Specs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
