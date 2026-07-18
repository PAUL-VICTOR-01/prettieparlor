import gownImage from '../assets/married-gown.jpg'
import './About.css'

const PROMISES = [
  {
    title: 'Our Philosophy',
    copy: "Hair should hold up your confidence, not compete with it. Every install is built to survive the day it's made for.",
  },
  {
    title: 'Our Promise',
    copy: 'A trial before every bridal booking, so the only surprise on the day is how good you feel.',
  },
  {
    title: 'Our Training',
    copy: 'What we learn at the chair, we teach — one stylist at a time, through the 1:1 training path.',
  },
]

export default function About() {
  return (
    <section className="about" id="studio">
      <div className="about__media">
        <img src={gownImage} alt="Bride looking back over her shoulder, veil in motion" />
      </div>

      <div className="about__content">
        <p className="eyebrow">The Studio</p>
        <h2 className="about__title">Elevating women through hair.</h2>
        <p className="about__lede">
          Prettie Parlor is a bridal hair studio in Abuja built around one
          idea: a woman should never have to think about her hair on the day
          it matters most.
        </p>

        <ul className="about__list">
          {PROMISES.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
