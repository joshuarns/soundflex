import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const close = () => setOpen(false)

  return (
    <nav className="nav">
      <div className="container nav__inner">
        <Link className="nav__logo" to="/" onClick={close}>
          <img src="/img/Soundflex-logo-white.png" alt="SoundFlex Logo" />
        </Link>

        <div className="nav__links">
          <Link to="/">Home</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/colors">Colors</Link>
          <Link to="/specs">Specs</Link>
        </div>

        <div className="nav__actions">
          <Link to="/contact" className="nav__cta label vibrancy-line">Contact</Link>
          <button className="nav__hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`nav__drawer ${open ? 'nav__drawer--open' : ''}`}>
        <Link to="/" onClick={close}>Home</Link>
        <Link to="/applications" onClick={close}>Applications</Link>
        <a href="#colors" onClick={close}>Colors</a>
        <Link to="/specs" onClick={close}>Specs</Link>
        <Link to="/contact" className="nav__drawer-cta label" onClick={close}>Contact</Link>
      </div>
    </nav>
  )
}
