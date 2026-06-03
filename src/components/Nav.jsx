import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav__inner">
        <Link className="nav__logo" to="/">
          <img src="/img/Soundflex-logo-white.png" alt="SoundFlex Logo" />
        </Link>
        <div className="nav__links">
          <Link to="/">Home</Link>
          <Link to="/applications">Applications</Link>
          <a href="#colors">Colors</a>
          <a href="#specs">Specs</a>
        </div>
        <div>
          <a href="#" className="nav__cta label vibrancy-line">Contact</a>
          <button className="nav__hamburger">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
