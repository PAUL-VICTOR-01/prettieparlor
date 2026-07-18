import gownImage from '../assets/married-gown.jpg'
import './Hero.css'

const PILLS = ['Bridal', 'Frontal Installations', 'Wigging & Revamp', 'Sew-Ins']

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <img src={gownImage} alt="Bride in a beaded long-sleeve gown, veil lifted mid-motion" />
        <div className="hero__scrim" />
      </div>

      <div className="hero__content">
        <p className="eyebrow eyebrow--light">Bridal Hair Studio · Abuja</p>
        <h1 className="hero__title">
          Elevating women
          <br />
          through hair.
        </h1>
        <p className="hero__subtitle">
          From the trial run to the last dance, your hair is built to hold —
          bridal styling, frontal installations and wigging, done for the day
          nothing can go wrong.
        </p>

        <div className="hero__actions">
          <a href="#book" className="btn btn-primary">
            Book Your Look
          </a>
          <a href="#services" className="btn btn-outline--light">
            View Services
          </a>
        </div>

        <ul className="hero__pills">
          {PILLS.map((pill, i) => (
            <li key={pill}>
              {pill}
              {i < PILLS.length - 1 && <span aria-hidden="true">/</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Signature element: a trailing veil ribbon, echoing the gown photograph */}
      <svg
        className="hero__veil"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="hero__veil-path"
          d="M0,120 C 260,40 420,190 700,110 C 980,30 1180,170 1440,90 L1440,220 L0,220 Z"
        />
      </svg>
    </section>
  )
}
