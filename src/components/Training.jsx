import './Training.css'

export default function Training() {
  return (
    <section className="training section" id="training">
      <div className="section-inner training__inner">
        <div className="training__text">
          <p className="eyebrow">For Stylists</p>
          <h2 className="training__title">1:1 Professional Training</h2>
          <p className="training__copy">
            One student, one senior stylist, full attention. Our training
            path is built for stylists who already hold a brush and want to
            move into frontal melts, custom wig construction and bridal-day
            styling — with real clients and real feedback, not a classroom.
          </p>
          <a href="#book" className="btn btn-primary">
            Apply for a Training Slot
          </a>
        </div>

        <ul className="training__points">
          <li>
            <h3>Frontal Melts</h3>
            <p>Hairline mapping, tinting and install technique, start to finish.</p>
          </li>
          <li>
            <h3>Wig Construction</h3>
            <p>Building, plucking and customising units from the base up.</p>
          </li>
          <li>
            <h3>Bridal-Day Styling</h3>
            <p>Working under time pressure, on a schedule that doesn't move.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
