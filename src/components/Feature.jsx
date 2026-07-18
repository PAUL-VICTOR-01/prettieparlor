import frontalVideo from '../assets/frontal-reinstall.mp4'
import frontalPoster from '../assets/posters/frontal-reinstall.jpg'
import LazyVideo from './LazyVideo.jsx'
import './Feature.css'

export default function Feature() {
  return (
    <section className="feature">
      <div className="feature__media">
        <LazyVideo src={frontalVideo} poster={frontalPoster} />
      </div>

      <div className="feature__content">
        <p className="eyebrow">Signature Service</p>
        <h2 className="feature__title">The Frontal Reinstall</h2>
        <p className="feature__copy">
          A frontal is only as good as its upkeep. We take your unit down,
          clean the band, re-melt the hairline and reset the install so it
          sits like day one — no re-buying, no starting over.
        </p>
        <a href="#book" className="btn btn-outline">
          Book a Reinstall
        </a>
      </div>
    </section>
  )
}
