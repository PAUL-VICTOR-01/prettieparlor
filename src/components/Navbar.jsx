import { useState } from 'react'
import CrownGlyph from './CrownGlyph.jsx'
import './Navbar.css'

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Training', href: '#training' },
  { label: 'Studio', href: '#studio' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
          <CrownGlyph />
          <span>
            Prettie <em>Parlor</em>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#book" className="btn btn-primary nav__cta" onClick={() => setOpen(false)}>
            Book a Slot
          </a>
        </nav>

        <span className="nav__location">Abuja, Nigeria</span>

        <button
          className={`nav__toggle ${open ? 'nav__toggle--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
