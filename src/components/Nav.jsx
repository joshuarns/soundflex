export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav__inner">
        <a className="nav__logo" href="#">
          <img src="/img/Soundflex-logo-white.png" alt="SoundFlex Logo" />
        </a>
        <div className="nav__links">
          <a href="#acoustics">Acoustics</a>
          <a href="#gallery">Gallery</a>
          <a href="#process">Process</a>
          <a href="#specs">Specs</a>
        </div>
        <div>
          <a href="#" className="nav__cta label vibrancy-line">Inquire</a>
          <button className="nav__hamburger">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
