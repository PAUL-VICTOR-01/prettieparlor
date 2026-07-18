import './Booking.css'

export default function Booking() {
  return (
    <section className="booking section" id="book">
      <div className="section-inner booking__inner">
        <div className="booking__text">
          <p className="eyebrow">Book a Slot</p>
          <h2 className="booking__title">Let's get you in the chair.</h2>
          <p className="booking__copy">
            Send us your service and preferred date, and we'll confirm your
            slot. Bridal bookings get a trial run first.
          </p>
        </div>

        <dl className="booking__details">
          <div>
            <dt>Hours</dt>
            <dd>Mon – Sat, 9AM – 6PM</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Abuja, Nigeria</dd>
          </div>
          <div>
            <dt>Reach Us</dt>
            <dd>
              {/* wa.me link below is still a placeholder — swap in the real number */}
              WhatsApp · @prettieparlor.ng
            </dd>
          </div>
        </dl>

        <a
          className="btn booking__cta"
          href="https://wa.me/000000000000"
          target="_blank"
          rel="noreferrer"
        >
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M16 4C9.4 4 4 9.4 4 16c0 2.2.6 4.3 1.7 6.1L4 28l6.1-1.6C11.8 27.4 13.9 28 16 28c6.6 0 12-5.4 12-12S22.6 4 16 4z"
              fill="currentColor"
            />
          </svg>
          Message on WhatsApp
        </a>
      </div>
    </section>
  )
}
