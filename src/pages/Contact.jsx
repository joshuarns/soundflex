import { useState } from 'react'
import img42 from '../assets/SoundFlex_4.2.jpg'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', project: '', message: '',
  })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Banner */}
      <section className="app-banner">
        <img src={img42} alt="Contact" className="app-banner__img" />
        <div className="app-banner__overlay" />
        <div className="app-banner__content container">
          <h1 className="app-banner__title">Let's work together.</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container contact-section__inner">

          {/* Left — copy */}
          <div className="contact-copy">
            <span className="section-label section-label--magenta">Get in touch</span>
            <h2 className="contact-copy__title">
              Every great space starts<br />with a conversation.
            </h2>
            <p className="contact-copy__body">
              Whether you're an architect, interior designer, or project developer,
              we'd love to hear about your vision. Tell us about your project and
              our acoustics team will get back to you with tailored recommendations.
            </p>
            <ul className="contact-copy__list">
              <li>
                <span className="contact-copy__dot" />
                Custom quotes for any project scale
              </li>
              <li>
                <span className="contact-copy__dot" />
                Sample kits available upon request
              </li>
              <li>
                <span className="contact-copy__dot" />
                Technical specs and installation guidance
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-thanks">
                <h3 className="contact-thanks__title">Message received.</h3>
                <p className="contact-thanks__body">
                  Thank you for reaching out. We'll be in touch within 1–2 business days.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label className="contact-form__label label">Full name</label>
                    <input
                      className="contact-form__input"
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handle}
                      required
                    />
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label label">Company</label>
                    <input
                      className="contact-form__input"
                      type="text"
                      name="company"
                      placeholder="Studio / Firm"
                      value={form.company}
                      onChange={handle}
                    />
                  </div>
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label label">Email</label>
                  <input
                    className="contact-form__input"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handle}
                    required
                  />
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label label">Type of project</label>
                  <select
                    className="contact-form__input contact-form__select"
                    name="project"
                    value={form.project}
                    onChange={handle}
                    required
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="corporate">Corporate workspace</option>
                    <option value="hospitality">Hospitality &amp; dining</option>
                    <option value="education">Education</option>
                    <option value="residential">Residential</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label label">Tell us about your project</label>
                  <textarea
                    className="contact-form__input contact-form__textarea"
                    name="message"
                    placeholder="Space dimensions, timeline, acoustic goals..."
                    value={form.message}
                    onChange={handle}
                    required
                    rows={5}
                  />
                </div>
                <button type="submit" className="contact-form__btn label">
                  Send message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  )
}
