import CrownGlyph from './CrownGlyph.jsx'
import './Footer.css'

const COLUMNS = [
  {
    title: 'Services',
    links: ['Bridal Styling', 'Frontal Installations', 'Wigging & Revamp', 'Sew-Ins'],
  },
  {
    title: 'Studio',
    links: ['Our Story', 'Gallery', 'Training', 'Book a Slot'],
  },
  {
    title: 'Follow',
    links: [
      { label: 'Instagram · @prettieparlor.ng', href: 'https://www.instagram.com/prettieparlor.ng/' },
      // Placeholder — replace with the real TikTok handle
      { label: 'TikTok · @prettieparlor.ng', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__logo">
            <CrownGlyph />
            <span>
              Prettie <em>Parlor</em>
            </span>
          </a>
          <p>Elevating women through hair. Bridal &amp; hair studio in Abuja.</p>
          <p className="footer__hours">Mon – Sat · 9AM – 6PM</p>
        </div>

        {COLUMNS.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) =>
                typeof link === 'string' ? (
                  <li key={link}>{link}</li>
                ) : (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <span>&copy; {new Date().getFullYear()} Prettie Parlor. All rights reserved.</span>
        <span>Abuja, Nigeria</span>
      </div>
    </footer>
  )
}
