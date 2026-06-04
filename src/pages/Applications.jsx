import { useState, useEffect, useCallback } from 'react'
import img21 from '../assets/SoundFlex_2.1.jpg'

import wall11 from '../assets/walls/WALL-1.1.jpg'
import wall12 from '../assets/walls/WALL-1.2.jpg'
import wall21 from '../assets/walls/WALL-2.1.jpg'
import wall22 from '../assets/walls/WALL-2.2.jpg'
import wallA from '../assets/walls/Wall_1.1.jpg'
import wallB from '../assets/walls/Wall_1.2.jpg'

import ceil11 from '../assets/ceilings/CIELINGS-1.1.jpg'
import ceil12 from '../assets/ceilings/CIELINGS-1.2.jpg'
import ceil21 from '../assets/ceilings/CIELINGS-2.1.jpg'
import ceil22 from '../assets/ceilings/CIELINGS-2.2.jpg'
import ceil31 from '../assets/ceilings/CIELINGS-3.1.jpg'
import ceil32 from '../assets/ceilings/CIELINGS-3.2.jpg'

import b11 from '../assets/baffle/BAFFLE-1.1.jpg'
import b12 from '../assets/baffle/BAFFLE-1.2.jpg'
import b21 from '../assets/baffle/BAFFLE-2.1.jpg'
import b22 from '../assets/baffle/BAFFLE-2.2.jpg'
import b31 from '../assets/baffle/BAFFLE-3.1.jpg'
import b32 from '../assets/baffle/BAFFLE-3.2.jpg'

const products = [
  {
    title: 'Walls',
    desc: 'High-performance wall panels designed to absorb sound and define space with a clean, architectural finish.',
    cover: wall11,
    gallery: [wall11, wall12, wall21, wall22, wallA, wallB],
  },
  {
    title: 'Ceilings',
    desc: 'Ceiling solutions that control reverberation overhead while integrating seamlessly with lighting and structure.',
    cover: ceil11,
    gallery: [ceil11, ceil12, ceil21, ceil22, ceil31, ceil32],
  },
  {
    title: 'Baffle',
    desc: 'Suspended baffle systems that add acoustic depth and visual rhythm to large open volumes and atriums.',
    cover: b11,
    gallery: [b11, b12, b21, b22, b31, b32],
  },
]

function GalleryModal({ title, gallery, onClose }) {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => setCurrent(i => (i - 1 + gallery.length) % gallery.length), [gallery.length])
  const next = useCallback(() => setCurrent(i => (i + 1) % gallery.length), [gallery.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="modal__main">
          <button className="modal__arrow modal__arrow--prev" onClick={prev} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <img className="modal__img" src={gallery[current]} alt={`${title} ${current + 1}`} />
          <button className="modal__arrow modal__arrow--next" onClick={next} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="modal__thumbs">
          {gallery.map((src, i) => (
            <button
              key={i}
              className={`modal__thumb ${i === current ? 'modal__thumb--active' : ''}`}
              onClick={() => setCurrent(i)}
            >
              <img src={src} alt={`${title} ${i + 1}`} />
            </button>
          ))}
        </div>

        <p className="modal__counter">{current + 1} / {gallery.length}</p>
      </div>
    </div>
  )
}

export default function Applications() {
  const [activeModal, setActiveModal] = useState(null)

  const active = products.find(p => p.title === activeModal)

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
              <div
                className="apc apc--clickable"
                key={p.title}
                onClick={() => setActiveModal(p.title)}
              >
                <div className="apc__img-wrap">
                  <div
                    className="apc__img"
                    style={{ backgroundImage: `url(${p.cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                  <div className="apc__tag label">{p.title}</div>
                </div>
                <div className="apc__body">
                  <h2 className="apc__title">{p.title}</h2>
                  <p className="apc__desc">{p.desc}</p>
                  <span className="apc__link">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <GalleryModal
          title={active.title}
          gallery={active.gallery}
          onClose={() => setActiveModal(null)}
        />
      )}
    </>
  )
}
