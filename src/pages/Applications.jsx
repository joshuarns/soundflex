import img21 from '../assets/SoundFlex_2.1.jpg'

const products = [
  {
    title: 'Walls',
    desc: 'High-performance wall panels designed to absorb sound and define space with a clean, architectural finish.',
  },
  {
    title: 'Ceilings',
    desc: 'Ceiling solutions that control reverberation overhead while integrating seamlessly with lighting and structure.',
  },
  {
    title: 'Baffle',
    desc: 'Suspended baffle systems that add acoustic depth and visual rhythm to large open volumes and atriums.',
  },
]

export default function Applications() {
  return (
    <>
      {/* Banner */}
      <section className="app-banner">
        <img src={img21} alt="Applications" className="app-banner__img" />
        <div className="app-banner__overlay" />
        <div className="app-banner__content container">
          <h1 className="app-banner__title">Applications</h1>
        </div>
      </section>

      {/* Product Cards */}
      <section className="app-products">
        <div className="container">
          <div className="app-products__grid">
            {products.map((p) => (
              <div className="apc" key={p.title}>
                <div className="apc__img-wrap">
                  <div className="apc__img" />
                  <div className="apc__tag label">{p.title}</div>
                </div>
                <div className="apc__body">
                  <h2 className="apc__title">{p.title}</h2>
                  <p className="apc__desc">{p.desc}</p>
                  <a href="#" className="apc__link">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
