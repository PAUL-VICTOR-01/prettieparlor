import gownImage from '../assets/married-gown.jpg'
import gorgeous1 from '../assets/gorgeous-1.mp4'
import gorgeous2 from '../assets/gorgeous-2.mp4'
import gorgeous3 from '../assets/gorgeous-3.mp4'
import gorgeous4 from '../assets/gorgeous-4.mp4'
import gorgeous5 from '../assets/gorgeous-5.mp4'
import gorgeous6 from '../assets/gorgeous-6.mp4'
import poster1 from '../assets/posters/gorgeous-1.jpg'
import poster2 from '../assets/posters/gorgeous-2.jpg'
import poster3 from '../assets/posters/gorgeous-3.jpg'
import poster4 from '../assets/posters/gorgeous-4.jpg'
import poster5 from '../assets/posters/gorgeous-5.jpg'
import poster6 from '../assets/posters/gorgeous-6.jpg'
import LazyVideo from './LazyVideo.jsx'
import './Gallery.css'

// Ordered as a story, not just a random grid: set the bridal tone, move
// through individual services, into a full session, then close on the
// reveal — so scrolling the gallery reads top to bottom like a booking
// would actually feel.
const TILES = [
  { label: 'Bridal', type: 'image', src: gownImage },
  { label: 'Sew-Ins', type: 'video', src: gorgeous1, poster: poster1 },
  { label: 'Wigging & Revamp', type: 'video', src: gorgeous2, poster: poster2 },
  { label: 'Finishing Touches', type: 'video', src: gorgeous4, poster: poster4 },
  { label: 'The Full Session', type: 'video', src: gorgeous5, poster: poster5 },
  { label: 'Finished Look', type: 'video', src: gorgeous3, poster: poster3 },
  { label: 'The Reveal', type: 'video', src: gorgeous6, poster: poster6, wide: true },
]

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="section-inner">
        <p className="eyebrow">The Work</p>
        <h2 className="gallery__title">Straight from the chair.</h2>
        <p className="gallery__lede">
          No filters, no studio lighting — just what happens between the
          first section and the last pin. Every clip here is a real client,
          shot in real time, so you know exactly what to expect when it's
          your turn in the chair.
        </p>

        <div className="gallery__grid">
          {TILES.map((tile) => (
            <div
              className={`gallery__tile ${tile.wide ? 'gallery__tile--wide' : ''}`}
              key={tile.label}
            >
              {tile.type === 'video' ? (
                <LazyVideo src={tile.src} poster={tile.poster} />
              ) : (
                <img src={tile.src} alt="Bride in a beaded gown with veil lifted" />
              )}
              <span className="gallery__label">{tile.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
