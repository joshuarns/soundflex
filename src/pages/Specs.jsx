import img11 from '../assets/SoundFlex_1.1.jpg'

const specs = [
  { label: 'Material',       value: 'Recycled PET Polyester Fiber' },
  { label: 'Thickness',      value: '9 mm' },
  { label: 'Panel Size',     value: '1220 × 2440 mm (48" × 96")' },
  { label: 'Composition',    value: 'Up to 70% recycled content' },
  { label: 'Surface Finish', value: 'Non-woven textured finish' },
  { label: 'Installation',   value: 'Adhesive, mechanical fastening, or mounting systems' },
  { label: 'Maintenance',    value: 'Easy to clean, low maintenance' },
  { label: 'Application',    value: 'Walls, ceilings, decorative acoustic features' },
]

const benefits = [
  'Reduces unwanted echo and reverberation',
  'Improves speech intelligibility and acoustic comfort',
  'Made from recycled and recyclable materials',
  'Lightweight and easy to install',
  'Durable and impact resistant',
  'Low VOC emissions for healthier indoor environments',
  'Available in multiple colors and custom design options',
  'Suitable for both functional and decorative applications',
]

const applications = [
  {
    category: 'Commercial',
    items: ['Offices', 'Meeting rooms', 'Coworking spaces', 'Reception areas'],
  },
  {
    category: 'Hospitality',
    items: ['Hotels', 'Restaurants', 'Cafés', 'Event venues'],
  },
  {
    category: 'Education',
    items: ['Classrooms', 'Libraries', 'Training centers', 'Universities'],
  },
  {
    category: 'Residential',
    items: ['Home offices', 'Media rooms', 'Living spaces', 'Home theaters'],
  },
]

export default function Specs() {
  return (
    <>
      {/* Banner */}
      <section className="app-banner">
        <img src={img11} alt="Specs" className="app-banner__img" />
        <div className="app-banner__overlay" />
        <div className="app-banner__content container">
          <p className="specs-banner__label label">SoundFlex 9 mm Acoustic Panel</p>
          <h1 className="app-banner__title">Sustainable Acoustic<br />Performance.</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="specs-intro">
        <div className="container specs-intro__inner">
          <p className="specs-intro__text">
            The SoundFlex 9 mm Acoustic Panel is engineered to enhance interior acoustics
            while adding a contemporary aesthetic to any space. Manufactured from high-density
            recycled PET fibers, this panel helps reduce echo and reverberation, creating
            quieter, more comfortable, and productive environments.
          </p>
          {/* Image placeholder */}
          <div className="specs-img-placeholder">
            <span className="specs-img-placeholder__label label">Image coming soon</span>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="specs-section specs-section--alt">
        <div className="container">
          <span className="section-label">Technical Specifications</span>
          <h2 className="specs-section__title">Built to perform.</h2>
          <div className="specs-table">
            {specs.map((s) => (
              <div className="specs-table__row" key={s.label}>
                <span className="specs-table__label label">{s.label}</span>
                <span className="specs-table__value">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="specs-section">
        <div className="container specs-benefits__inner">
          <div className="specs-benefits__left">
            <span className="section-label section-label--magenta">Key Benefits</span>
            <h2 className="specs-section__title">Why SoundFlex.</h2>
            <ul className="specs-benefits__list">
              {benefits.map((b) => (
                <li key={b}>
                  <span className="specs-benefits__dot" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          {/* Image placeholder */}
          <div className="specs-img-placeholder specs-img-placeholder--tall">
            <span className="specs-img-placeholder__label label">Image coming soon</span>
          </div>
        </div>
      </section>

      {/* Acoustic Performance */}
      <section className="specs-section specs-section--alt">
        <div className="container specs-performance__inner">
          {/* Image placeholder */}
          <div className="specs-img-placeholder specs-img-placeholder--tall">
            <span className="specs-img-placeholder__label label">Image coming soon</span>
          </div>
          <div className="specs-performance__content">
            <span className="section-label">Acoustic Performance</span>
            <h2 className="specs-section__title">Precision in every fiber.</h2>
            <p className="specs-performance__body">
              The SoundFlex 9 mm Acoustic Panel utilizes a porous PET fiber structure that
              effectively absorbs sound energy and minimizes noise reflections. This contributes
              to improved acoustic quality in spaces where communication, concentration, and
              comfort are essential.
            </p>
            <p className="specs-performance__body">
              When integrated into optimized wall or ceiling systems, the panel can significantly
              enhance overall room acoustics while maintaining a clean and modern appearance.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="specs-section">
        <div className="container">
          <span className="section-label">Recommended Applications</span>
          <h2 className="specs-section__title">Designed for every space.</h2>
          <div className="specs-apps__grid">
            {applications.map((a) => (
              <div className="specs-app-card" key={a.category}>
                <h3 className="specs-app-card__title">{a.category}</h3>
                <ul className="specs-app-card__list">
                  {a.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable + Design — side by side */}
      <section className="specs-section specs-section--alt">
        <div className="container specs-duo">
          <div className="specs-duo__card">
            <span className="section-label">Sustainable Solution</span>
            <h3 className="specs-duo__title">Responsibly made.</h3>
            <p className="specs-duo__body">
              SoundFlex Acoustic Panels are manufactured using recycled PET fibers sourced
              from post-consumer plastic materials. This environmentally responsible approach
              helps reduce waste while supporting sustainable building practices and green
              design initiatives.
            </p>
          </div>
          <div className="specs-duo__card">
            <span className="section-label section-label--magenta">Design Flexibility</span>
            <h3 className="specs-duo__title">Beyond acoustics.</h3>
            <p className="specs-duo__body">
              More than just an acoustic treatment, the SoundFlex 9 mm panel serves as a
              versatile architectural element. Its clean textile-like finish allows designers
              and architects to create customized wall features, ceiling installations,
              geometric patterns, and decorative acoustic solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
