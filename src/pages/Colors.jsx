import { Link } from 'react-router-dom'
import img21 from '../assets/SoundFlex_2.1.jpg'

const palette = [
  {
    collection: 'Neutrals',
    desc: 'Timeless tones that integrate effortlessly into any interior, from minimalist to classic.',
    colors: [
      { name: 'White Sand',  hex: '#F5F0EB' },
      { name: 'Warm Grey',   hex: '#C8C0B8' },
      { name: 'Concrete',    hex: '#9E9890' },
      { name: 'Charcoal',    hex: '#4A4845' },
      { name: 'Midnight',    hex: '#1C1B1A' },
    ],
  },
  {
    collection: 'Warm Tones',
    desc: 'Earthy, inviting hues that add warmth and texture to hospitality and residential spaces.',
    colors: [
      { name: 'Linen',       hex: '#EDE0D0' },
      { name: 'Camel',       hex: '#C4966A' },
      { name: 'Terracotta',  hex: '#B5604A' },
      { name: 'Rust',        hex: '#8C3A2A' },
    ],
  },
  {
    collection: 'Cool Tones',
    desc: 'Calm, focused palettes ideal for corporate, educational, and healthcare environments.',
    colors: [
      { name: 'Powder',      hex: '#D6E4EC' },
      { name: 'Sage',        hex: '#8FA89A' },
      { name: 'Slate Blue',  hex: '#5C7A8C' },
      { name: 'Storm',       hex: '#3A5260' },
    ],
  },
  {
    collection: 'Bold',
    desc: 'Statement colors for designers looking to make acoustics part of the visual identity.',
    colors: [
      { name: 'Oat',         hex: '#D4C5A9' },
      { name: 'Forest',      hex: '#2D4A38' },
      { name: 'Navy',        hex: '#1E2D45' },
      { name: 'Graphite',    hex: '#2E2E2E' },
    ],
  },
]

function isDark(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 < 128
}

export default function Colors() {
  return (
    <>
      {/* Banner */}
      <section className="app-banner">
        <img src={img21} alt="Colors" className="app-banner__img" />
        <div className="app-banner__overlay" />
        <div className="app-banner__content container">
          <h1 className="app-banner__title">Color as a<br />design tool.</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="colors-intro">
        <div className="container colors-intro__inner">
          <div className="colors-intro__text">
            <span className="section-label">Color Philosophy</span>
            <h2 className="colors-intro__title">
              Acoustics that set the tone.
            </h2>
            <p className="colors-intro__body">
              At SoundFlex, we believe acoustic panels should do more than perform —
              they should define the character of a space. Our color collections are
              carefully curated to complement modern architectural palettes, allowing
              designers and architects to integrate acoustic comfort without compromise.
            </p>
            <p className="colors-intro__body">
              Each color is applied using a high-durability pigmentation process that
              maintains the panel's acoustic properties while delivering consistent,
              fade-resistant results across every installation.
            </p>
          </div>
          {/* Placeholder */}
          <div className="colors-intro__placeholder">
            <span className="specs-img-placeholder__label label">Image coming soon</span>
          </div>
        </div>
      </section>

      {/* Collections */}
      {palette.map((group, i) => (
        <section
          key={group.collection}
          className={`colors-collection ${i % 2 !== 0 ? 'colors-collection--alt' : ''}`}
        >
          <div className="container colors-collection__inner">
            {/* Text side */}
            <div className="colors-collection__info">
              <span className="section-label">{group.collection}</span>
              <h3 className="colors-collection__title">{group.collection}</h3>
              <p className="colors-collection__desc">{group.desc}</p>

              {/* Swatches */}
              <div className="swatches">
                {group.colors.map((c) => (
                  <div className="swatch" key={c.name}>
                    <div
                      className="swatch__chip"
                      style={{ background: c.hex }}
                    />
                    <span className="swatch__name label">{c.name}</span>
                    <span className="swatch__hex">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image placeholder */}
            <div className="colors-collection__img-placeholder">
              <span className="specs-img-placeholder__label label">Image coming soon</span>
            </div>
          </div>
        </section>
      ))}

      {/* Custom Colors CTA */}
      <section className="colors-custom">
        <div className="container colors-custom__inner">
          <div className="colors-custom__placeholder">
            <span className="specs-img-placeholder__label label">Image coming soon</span>
          </div>
          <div className="colors-custom__content">
            <span className="section-label section-label--magenta">Custom Colors</span>
            <h2 className="colors-custom__title">Your vision,<br />your color.</h2>
            <p className="colors-custom__body">
              Don't see the exact shade you need? SoundFlex offers custom color
              matching for projects that require a specific palette. Our production
              team works directly with designers and specifiers to achieve precise
              color targets — from RAL and NCS references to brand-specific tones.
            </p>
            <p className="colors-custom__body">
              Minimum quantities apply for custom color production. Contact our team
              to discuss your project requirements.
            </p>
            <Link to="/contact" className="colors-custom__btn label">
              Request custom color →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
