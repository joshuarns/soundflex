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
            <img
              src="https://lh3.googleusercontent.com/aida/ADBb0ugdbso7UzyO8sNNQ8JrgBUUNHT7J9Nsf5rsLsWSqOmSaaByVvYCNLEqA9eWWKnxT4VG8AXFW9_AMgBQ8euJbK-n361rxlLOci1YLUm-iIfkEBAxR9iOtO7UCrJtQjycYd6VEZuq0hzWlYOXGQ7LRQVuTLSp6lSHeljR4Ud0P0cRL0VPF2MEmt5tO1piyQ3wN-zZTDNOzLzfyT0cfBk0kLhlY2AnCcOtEc4dUJj2H6oGLl2MfjaHohR9Hg"
              alt="Soundflex Installation"
            />
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
              <img
                src="https://lh3.googleusercontent.com/aida/ADBb0ujGPJAa-whT00W8-VeW82Ks14iPj-bOd53DOH2bxABWQ3WomZ75FpP53YbuCuxIAJpDdgXo8pyPObt-tTKR7A1blRrCEz8TXWZ0mEDkWz6ikv7GHPJ8Q2KiExldTMRLpqeTXb-s0AQqq2xKN-ZST0-L3AVE4YX_8L1X6n4k9bgcuorI-wbNeh3bMD3-IDmSb8sX8YGGSiSQAc9_B3wHNyvOlScYJ9jgfc14-b6RX8EpNjniskAPQdX0bQ"
                alt="Office Acoustic Application"
              />
              <div className="app-card__overlay">
                <h3 className="app-card__title">Corporate Workspaces</h3>
                <p className="app-card__desc">
                  Mitigate open-office noise and enhance privacy in meeting rooms.
                </p>
              </div>
            </div>
            <div className="app-card">
              <img
                src="https://lh3.googleusercontent.com/aida/ADBb0ugpToAUpQR-bHltjPKRl9972L1uIG8XYu3RXWRA3WUyclYFZr6-Ef5vXvHrfF8lKXIiTUNhIHX8eN-W7juWs_leFzYlmxOFoT1F64sup6IuEVxOkrqjQ2l7qgbt3V19tcyX0hj5bcGpC1i8qCituq4NJtL6gRfSfPI4u1VpTz5k_pQMk5YA9PQA8NFP7TPyNXw42t0Cr_vh2uidcmqgxrKAEnGUiQYzv5fIhLiGft3ybKKhp6S1jdloq9I"
                alt="Hospitality Acoustic Application"
              />
              <div className="app-card__overlay">
                <h3 className="app-card__title">Hospitality &amp; Dining</h3>
                <p className="app-card__desc">
                  Control ambient noise to create intimate, conversational dining experiences.
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
            <img
              src="https://lh3.googleusercontent.com/aida/ADBb0ujTV4R67r--RWCRo6EsTzag5d_aifgdH-fx89OHgqUxi1DnbEWsy4I2RbHiXTBtgHF_7YohLmKn1fQNRws7BB4-Z_tv5Z1_lzOlJOEPb1pgyIKPzp8H1W7IucXar1FevljWZEYiSOsz_p5n-fR9ma1041jyGbc2dFd90ExV4mJXOX3sxw2rJhr4GedUb1wZbtbvH8QUaCIAYY8QzaBLWcN1_mGV_9phH19qEN6gIbXsOsrY3RABjNlh1XA"
              alt="Acoustic Panel Detail"
            />
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
