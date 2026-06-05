import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Applications from './pages/Applications'
import Contact from './pages/Contact'
import Specs from './pages/Specs'
import Colors from './pages/Colors'
import './styles.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/specs" element={<Specs />} />
        <Route path="/colors" element={<Colors />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
