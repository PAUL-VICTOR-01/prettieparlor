import './AnnouncementBar.css'

const MESSAGE = 'Now booking Bridal Season 2026 — Mon – Sat · 9AM – 6PM · Abuja'

export default function AnnouncementBar() {
  return (
    <div className="announce" role="note">
      <div className="announce__track">
        {Array.from({ length: 6 }).map((_, i) => (
          <span className="announce__item" key={i}>
            {MESSAGE}
          </span>
        ))}
      </div>
    </div>
  )
}
