'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import styles from './FlyerCarousel.module.css'

const flyers = [
  {
    src: '/loyal-assets/flyer-happy-fridays.jpeg',
    alt: 'Happy Fridays — $5 drink specials and $7 food at Loyalty Lounge Md',
    label: 'Every Friday · 5PM – 7PM',
    title: 'Happy Fridays',
  },
  {
    src: '/loyal-assets/flyer-karaoke-saturday.jpeg',
    alt: 'Karaoke on Saturday — food specials 4PM–7PM at Loyalty Lounge Md',
    label: 'Every Saturday · 6PM – 10PM',
    title: 'Karaoke Night',
  },
]

export function FlyerCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [active, setActive] = useState(0)
  const dragThreshold = useRef(false)

  /* ── drag scroll ── */
  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    dragThreshold.current = false
    setIsDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.6
    if (Math.abs(walk) > 4) dragThreshold.current = true
    trackRef.current.scrollLeft = scrollLeft - walk
  }, [isDragging, startX, scrollLeft])

  const stopDrag = useCallback(() => setIsDragging(false), [])

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', stopDrag)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', stopDrag)
    }
  }, [onMouseMove, stopDrag])

  /* ── track scroll to update active dot ── */
  const onScroll = useCallback(() => {
    if (!trackRef.current) return
    const track = trackRef.current
    const cardWidth = (track.firstElementChild as HTMLElement)?.offsetWidth ?? 400
    const gap = 40
    const index = Math.round(track.scrollLeft / (cardWidth + gap))
    setActive(Math.min(Math.max(index, 0), flyers.length - 1))
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [onScroll])

  /* ── programmatic scroll ── */
  const scrollTo = (index: number) => {
    if (!trackRef.current) return
    const track = trackRef.current
    const card = track.children[index] as HTMLElement
    const targetScroll = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2
    track.scrollTo({ left: targetScroll, behavior: 'smooth' })
    setActive(index)
  }

  const prev = () => scrollTo(Math.max(active - 1, 0))
  const next = () => scrollTo(Math.min(active + 1, flyers.length - 1))

  /* ── touch support ── */
  const touchStart = useRef(0)
  const touchScrollLeft = useRef(0)

  const onTouchStart = (e: React.TouchEvent) => {
    if (!trackRef.current) return
    touchStart.current = e.touches[0].pageX
    touchScrollLeft.current = trackRef.current.scrollLeft
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!trackRef.current) return
    const walk = (e.touches[0].pageX - touchStart.current) * 1.2
    trackRef.current.scrollLeft = touchScrollLeft.current - walk
  }

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <p className={styles.label}>Happening Weekly</p>
        <h2 className={styles.heading}>
          Specials <span>&amp;</span> Promos
        </h2>
      </div>

      <div
        ref={trackRef}
        className={`${styles.track} ${isDragging ? styles.dragging : ''}`}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        aria-label="Weekly specials carousel"
      >
        {flyers.map((flyer, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.shimmerBorder}>
              <div className={styles.cardInner}>
                <img src={flyer.src} alt={flyer.alt} draggable={false} />
                <div className={styles.cardCaption}>
                  <span className={styles.cardLabel}>{flyer.label}</span>
                  <span className={styles.cardTitle}>{flyer.title}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.arrows}>
        <button
          className={styles.arrow}
          onClick={prev}
          disabled={active === 0}
          aria-label="Previous flyer"
        >
          ←
        </button>
        <button
          className={styles.arrow}
          onClick={next}
          disabled={active === flyers.length - 1}
          aria-label="Next flyer"
        >
          →
        </button>
      </div>

      <div className={styles.dots}>
        {flyers.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to ${flyers[i].title}`}
          />
        ))}
      </div>
    </section>
  )
}
