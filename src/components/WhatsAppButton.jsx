import './WhatsAppButton.css'

// Placeholder number — replace with the real WhatsApp business number
const WHATSAPP_LINK = 'https://wa.me/000000000000'

export default function WhatsAppButton() {
  return (
    <a
      className="wa-fab"
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Prettie Parlor on WhatsApp"
    >
      <span className="wa-fab__ring" aria-hidden="true" />
      <span className="wa-fab__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 4C9.4 4 4 9.4 4 16c0 2.2.6 4.3 1.7 6.1L4 28l6.1-1.6C11.8 27.4 13.9 28 16 28c6.6 0 12-5.4 12-12S22.6 4 16 4z"
            fill="currentColor"
          />
          <path
            d="M11.8 10.6c.3-.6.6-.6.9-.6h.7c.2 0 .5 0 .8.6.3.7 1 2.3 1.1 2.4.1.2.1.4 0 .6-.1.2-.2.3-.4.5-.2.2-.4.4-.5.5-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.7-.1.2-.2.9-1 1.1-1.3.2-.3.4-.3.7-.2.3.1 1.9.9 2.2 1.1.3.1.5.2.6.3.1.2.1 1-.3 1.9-.4.9-2.1 1.8-2.9 1.8-.8 0-1.6.1-5.2-1.3-4.4-1.8-7.1-6.2-7.3-6.5-.2-.3-1.7-2.3-1.7-4.3 0-2.1 1.1-3.1 1.5-3.5z"
            fill="var(--ivory)"
          />
        </svg>
      </span>
      <span className="wa-fab__label">Chat on WhatsApp</span>
    </a>
  )
}
