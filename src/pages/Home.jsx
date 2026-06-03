import img11 from '../assets/SoundFlex_1.1.jpg'
import img12 from '../assets/SoundFlex_1.2.jpg'
import img21 from '../assets/SoundFlex_2.1.jpg'
import img22 from '../assets/SoundFlex_2.2.jpg'
import img31 from '../assets/SoundFlex_3.1.jpg'
import img32 from '../assets/SoundFlex_3.2.jpg'
import img41 from '../assets/SoundFlex_4.1.jpg'
import img42 from '../assets/SoundFlex_4.2.jpg'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="soft-blur" style={{ top: 0, left: 0 }} />
        <div className="container hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">
              Acoustic comfort, <br />
              <span className="gradient-text">designed</span> for modern spaces.
            </h1>
            <p className="hero__subtitle">
              High-performance PET acoustic panels that improve sound, define atmosphere,
              and integrate seamlessly into architecture.
            </p>
            <div className="hero__actions">
              <a href="#applications" className="hero__btn-primary label vibrancy-line">
                Explore Applications
              </a>
              <a href="#technology" className="hero__btn-secondary label">
                View Technology
              </a>
            </div>
          </div>
          <div className="hero__image">
            <img src={img11} alt="Soundflex Installation" />
            <div className="hero__image-overlay" />
          </div>
        </div>
      </section>

      {/* Product Value */}
      <section className="values">
        <div
          className="soft-blur"
          style={{
            bottom: 0,
            right: 0,
            background: 'radial-gradient(circle, rgba(29,29,31,0.05) 0%, rgba(255,255,255,0) 70%)',
          }}
        />
        <div className="container">
          <div className="values__grid">
            <div className="value-card">
              <div className="value-card__icon">
                <span className="material-symbols-outlined">graphic_eq</span>
              </div>
              <h3 className="value-card__title">Acoustic Performance</h3>
              <p className="value-card__body">
                Engineered to absorb mid-to-high frequencies, dramatically reducing
                reverberation and creating focused, quiet environments.
              </p>
            </div>
            <div className="value-card value-card--magenta">
              <div className="value-card__icon">
                <span className="material-symbols-outlined">architecture</span>
              </div>
              <h3 className="value-card__title">Architectural Integration</h3>
              <p className="value-card__body">
                Minimalist profiles and precise cuts allow panels to blend into walls,
                ceilings, and custom millwork seamlessly.
              </p>
            </div>
            <div className="value-card value-card--orange">
              <div className="value-card__icon">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h3 className="value-card__title">Sustainable PET</h3>
              <p className="value-card__body">
                Constructed from up to 60% recycled post-consumer plastics, offering a
                durable and environmentally responsible acoustic solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="applications" id="applications">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Environments</span>
            <h2 className="section-title">Designed for focus.</h2>
          </div>
          <div className="apps-grid">
            <div className="app-card">
              <img src={img21} alt="Corporate Workspaces" />
              <div className="app-card__overlay">
                <h3 className="app-card__title">Corporate Workspaces</h3>
                <p className="app-card__desc">
                  Mitigate open-office noise and enhance privacy in meeting rooms.
                </p>
              </div>
            </div>
            <div className="app-card">
              <img src={img22} alt="Hospitality & Dining" />
              <div className="app-card__overlay">
                <h3 className="app-card__title">Hospitality &amp; Dining</h3>
                <p className="app-card__desc">
                  Control ambient noise to create intimate, conversational dining experiences.
                </p>
              </div>
            </div>
            <div className="app-card">
              <img src={img12} alt="Education Spaces" />
              <div className="app-card__overlay">
                <h3 className="app-card__title">Education Spaces</h3>
                <p className="app-card__desc">
                  Improve speech intelligibility in classrooms and lecture halls.
                </p>
              </div>
            </div>
            <div className="app-card">
              <img src={img32} alt="Residential Interiors" />
              <div className="app-card__overlay">
                <h3 className="app-card__title">Residential Interiors</h3>
                <p className="app-card__desc">
                  Bring acoustic comfort to home studios, living rooms, and open-plan spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="technology" id="technology">
        <div className="container tech__inner">
          <div className="tech__image">
            <img src={img31} alt="Acoustic Panel Detail" />
          </div>
          <div className="tech__content">
            <span className="section-label section-label--magenta">Material Science</span>
            <h2 className="tech__title">Precision in every fiber.</h2>
            <p className="tech__body">
              Our panels undergo a rigorous manufacturing process to ensure consistent
              density and structural integrity. The micro-perforated surface maximizes
              sound wave absorption while maintaining a smooth, monolithic appearance
              suitable for high-end interiors.
            </p>
            <ul className="tech__list">
              <li>
                <span className="tech__dot tech__dot--purple" />
                NRC rating of up to 0.85
              </li>
              <li>
                <span className="tech__dot tech__dot--magenta" />
                Fire retardant (Class A ASTM E84)
              </li>
              <li>
                <span className="tech__dot tech__dot--orange" />
                Zero VOC emissions
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="gallery-strip">
        <div className="gallery-strip__item">
          <img src={img41} alt="Soundflex Detail 1" />
        </div>
        <div className="gallery-strip__item">
          <img src={img42} alt="Soundflex Detail 2" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta__glow" />
        <div className="container cta__inner">
          <h2 className="cta__title">Design quieter, more comfortable spaces.</h2>
          <p className="cta__subtitle">
            Connect with our acoustics team to discuss your next project or request a sample kit.
          </p>
          <a href="#" className="cta__btn label">Request Consultation</a>
        </div>
      </section>
    </>
  )
}
