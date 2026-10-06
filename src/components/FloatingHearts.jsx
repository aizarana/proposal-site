import { useMemo } from 'react'

export default function FloatingHearts() {
  const hearts = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 24,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 10,
      opacity: 0.15 + Math.random() * 0.35,
    }))
  }, [])

  return (
    <div className="hearts-container" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  )
}
