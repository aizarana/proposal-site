import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="page hero">
      <p className="script">A little surprise...</p>
      <h1 className="title script">Meri Jann Hassam</h1>
      <p className="subtitle">
        Every moment with Your feels beautiful.
        Next page par sirf mere dil ki baat hai...
      </p>
      <Link className="btn primary" to="/letter">Read My Heart →</Link>
    </section>
  )
}
