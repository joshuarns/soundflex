import { Link } from 'react-router-dom'
import imgBanner from '../assets/banner-colors.jpg'
import imgNeutrals  from '../assets/neutrals-tones.jpg'
import imgWarm      from '../assets/warm-tones.jpg'
import imgCool      from '../assets/cool-tones.jpg'
import imgBold      from '../assets/vibrant-tones.jpg'
import imgIntro     from '../assets/Specs_2.jpg'
import imgCustom    from '../assets/SoundFlex_3.2.jpg'

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
    img: imgNeutrals,
    desc: 'Timeless tones that integrate effortlessly into any interior, from minimalist to classic.',
    colors: [
      { name: 'White',     img: c19 },
      { name: 'Silver',    img: c5  },
      { name: 'Graphite',  img: c15 },
      { name: 'Slate',     img: c4  },
      { name: 'Espresso',  img: c6  },
    ],
  },
  {
    collection: 'Warm Tones',
    img: imgWarm,
    desc: 'Earthy, inviting hues that add warmth and texture to hospitality and residential spaces.',
    colors: [
      { name: 'Blush',      img: c7  },
      { name: 'Peach',      img: c3  },
      { name: 'Mocha',      img: c8  },
      { name: 'Mustard',    img: c18 },
      { name: 'Tangerine',  img: c21 },
    ],
  },
  {
    collection: 'Cool & Earth',
    img: imgCool,
    desc: 'Calm, grounded palettes ideal for corporate, educational, and biophilic design environments.',
    colors: [
      { name: 'Sage',      img: c16 },
      { name: 'Meadow',    img: c10 },
      { name: 'Teal',      img: c13 },
      { name: 'Seafoam',   img: c17 },
      { name: 'Forest',    img: c12 },
    ],
  },
  {
    collection: 'Bold & Vibrant',
    img: imgBold,
    desc: 'Statement colors for designers looking to make acoustics part of the visual identity.',
    colors: [
      { name: 'Dusty Rose', img: c1  },
      { name: 'Lilac',      img: c2  },
      { name: 'Fuchsia',    img: c14 },
      { name: 'Coral',      img: c9  },
      { name: 'Lime',       img: c11 },
      { name: 'Indigo',     img: c20 },
    ],
  },
]

export default function Colors() {
  return (
    <>
      {/* Banner */}
      <section className="app-banner">
        <img src={imgBanner} alt="Colors" className="app-banner__img" />
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
            <img src={imgIntro} alt="SoundFlex acoustic panel" />
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
              <img src={group.img} alt={group.collection} />
            </div>
          </div>
        </section>
      ))}

      {/* Custom Colors CTA */}
      <section className="colors-custom">
        <div className="container colors-custom__inner">
          <div className="colors-custom__placeholder">
            <img src={imgCustom} alt="Custom colors" />
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
