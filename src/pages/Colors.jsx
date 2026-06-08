import { Link } from 'react-router-dom'
import img21 from '../assets/SoundFlex_2.1.jpg'

import c1  from '../assets/colors/1.jpg'
import c2  from '../assets/colors/2.jpg'
import c3  from '../assets/colors/3.jpg'
import c4  from '../assets/colors/4.jpg'
import c5  from '../assets/colors/5.jpg'
import c6  from '../assets/colors/6.jpg'
import c7  from '../assets/colors/7.jpg'
import c8  from '../assets/colors/8.jpg'
import c9  from '../assets/colors/9.jpg'
import c10 from '../assets/colors/10.jpg'
import c11 from '../assets/colors/11.jpg'
import c12 from '../assets/colors/12.jpg'
import c13 from '../assets/colors/13.jpg'
import c14 from '../assets/colors/14.jpg'
import c15 from '../assets/colors/15.jpg'
import c16 from '../assets/colors/16.jpg'
import c17 from '../assets/colors/17.jpg'
import c18 from '../assets/colors/18.jpg'
import c19 from '../assets/colors/19.jpg'
import c20 from '../assets/colors/20.jpg'
import c21 from '../assets/colors/21.jpg'

const palette = [
  {
    collection: 'Neutrals',
    desc: 'Timeless tones that integrate effortlessly into any interior, from minimalist to classic.',
    colors: [
      { name: 'White Sand',  img: c1  },
      { name: 'Warm Grey',   img: c2  },
      { name: 'Concrete',    img: c3  },
      { name: 'Stone',       img: c4  },
      { name: 'Charcoal',    img: c5  },
      { name: 'Midnight',    img: c6  },
    ],
  },
  {
    collection: 'Warm Tones',
    desc: 'Earthy, inviting hues that add warmth and texture to hospitality and residential spaces.',
    colors: [
      { name: 'Linen',       img: c7  },
      { name: 'Camel',       img: c8  },
      { name: 'Terracotta',  img: c9  },
      { name: 'Rust',        img: c10 },
      { name: 'Sienna',      img: c11 },
    ],
  },
  {
    collection: 'Cool Tones',
    desc: 'Calm, focused palettes ideal for corporate, educational, and healthcare environments.',
    colors: [
      { name: 'Powder',      img: c12 },
      { name: 'Sage',        img: c13 },
      { name: 'Slate Blue',  img: c14 },
      { name: 'Storm',       img: c15 },
      { name: 'Dusk',        img: c16 },
    ],
  },
  {
    collection: 'Bold',
    desc: 'Statement colors for designers looking to make acoustics part of the visual identity.',
    colors: [
      { name: 'Oat',         img: c17 },
      { name: 'Forest',      img: c18 },
      { name: 'Navy',        img: c19 },
      { name: 'Graphite',    img: c20 },
      { name: 'Obsidian',    img: c21 },
    ],
  },
]

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
            <div className="colors-collection__info">
              <span className="section-label">{group.collection}</span>
              <h3 className="colors-collection__title">{group.collection}</h3>
              <p className="colors-collection__desc">{group.desc}</p>

              <div className="swatches">
                {group.colors.map((c) => (
                  <div className="swatch" key={c.name}>
                    <div className="swatch__chip">
                      <img src={c.img} alt={c.name} />
                    </div>
                    <span className="swatch__name label">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

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
