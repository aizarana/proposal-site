import { useState, useRef } from 'react'
import confetti from 'canvas-confetti'

export default function Question() {
  const [yes, setYes] = useState(false)
  const noRef = useRef(null)

  const dodge = () => {
    const el = noRef.current
    if (!el) return
    const parent = el.parentElement.getBoundingClientRect()
    const x = Math.random() * (parent.width - 120)
    const y = Math.random() * (parent.height - 60)
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const celebrate = () => {
    setYes(true)
    confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } })
    setTimeout(() => confetti({ particleCount: 150, angle: 60, spread: 60, origin: { x: 0 } }), 400)
    setTimeout(() => confetti({ particleCount: 150, angle: 120, spread: 60, origin: { x: 1 } }), 800)
  }

  return (
    <section className="page question">
      {!yes ? (
        <>
          <h1 className="script">Meri Jann Hassam...</h1>
          <h2 className="big-question">Will you be mine? 💍</h2>
          <div className="btn-arena">
            <button className="btn primary" onClick={celebrate}>YES! 💖</button>
            <button
              className="btn no"
              ref={noRef}
              onMouseEnter={dodge}
              onTouchStart={dodge}
              onFocus={dodge}
            >
              No 🙈
            </button>
          </div>
        </>
      ) : (
        <div className="celebrate">
          <h1 className="script">AMAZING! 💖</h1>
          <p className="subtitle">
            Main jaanti thi ke Ap "Yes" hi kahenge ❤️<br />
            Ab hum dono hamesha ek saath rahenge — Mere Dil ke Badshah ❤
          </p>
          <p className="hearts">💖✨💖✨💖</p>
        </div>
      )}
    </section>
  )
}
