import './Services.css'

const SERVICES = [
  {
    mark: 'B',
    name: 'Bridal Styling',
    copy: 'Wedding-day hair, from the trial run to the final pin. Veils and headpieces set to hold through the reception.',
  },
  {
    mark: 'F',
    name: 'Frontal Installations',
    copy: 'Melted, natural hairlines — glueless or glue-based, customised to your edges and skin tone.',
  },
  {
    mark: 'W',
    name: 'Wigging & Revamp',
    copy: 'New units constructed, plucked and coloured to match you — or bring an old favourite back to life.',
  },
  {
    mark: 'S',
    name: 'Sew-Ins',
    copy: 'Protective, long-wearing installations for length, volume or a full colour change, commitment-free.',
  },
  {
    mark: 'T',
    name: '1:1 Professional Training',
    copy: 'Hands-on mentorship for stylists ready to master frontals, wigging and bridal work.',
    href: '#training',
  },
]

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="section-inner">
        <div className="services__head">
          <p className="eyebrow">What We Do</p>
          <h2 className="services__title">Every service, built to last the day it's for.</h2>
        </div>

        <ul className="services__list">
          {SERVICES.map((s) => (
            <li key={s.name} className="services__row">
              <span className="services__mark" aria-hidden="true">{s.mark}</span>
              <h3 className="services__name">{s.name}</h3>
              <p className="services__copy">{s.copy}</p>
              <a href={s.href ?? '#book'} className="services__link">
                {s.href ? 'Learn more' : 'Book this'}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
