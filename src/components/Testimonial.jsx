import CrownGlyph from './CrownGlyph.jsx'
import './Testimonial.css'

export default function Testimonial() {
  return (
    <section className="testimonial section">
      {/* Placeholder quote — swap for a real client testimonial */}
      <div className="section-inner testimonial__inner">
        <CrownGlyph className="testimonial__glyph" />
        <blockquote>
          "My hair held from the trial run to the last dance on the floor. I
          didn't think about it once — which is exactly what I paid for."
        </blockquote>
        <cite>— Bride, Abuja</cite>
      </div>
    </section>
  )
}
