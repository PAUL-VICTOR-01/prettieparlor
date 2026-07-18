import { useEffect, useRef, useState } from 'react'

/**
 * A <video> that doesn't download or play until it's about to enter the
 * viewport. Shows a static poster frame until then, so the page doesn't
 * try to pull down every clip at once on page load — this is what was
 * making the gallery slow on mobile data.
 */
export default function LazyVideo({ src, poster, className }) {
  const ref = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If the browser doesn't support IntersectionObserver, just load it.
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.unobserve(el)
          }
        })
      },
      { rootMargin: '250px 0px', threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      src={shouldLoad ? src : undefined}
      autoPlay={shouldLoad}
      muted
      loop
      playsInline
      preload="none"
    />
  )
}
