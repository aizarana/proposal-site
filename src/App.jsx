import { useRef, useState } from 'react'
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import FloatingHearts from './components/FloatingHearts'
import Home from './pages/Home'
import Letter from './pages/Letter'
import Question from './pages/Question'
import './index.css'

function MusicButton() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)
  const [useLocal, setUseLocal] = useState(false)

  const src = useLocal
    ? '/music.mp3'
    : 'https://archive.org/download/jamendo-528234/01-2053649-Carvine-Romantic%20Love%20Piano.mp3'

  const handleError = () => {
    if (!useLocal) setUseLocal(true)
    else setError(true)
  }

  const toggle = async () => {
    if (!audioRef.current) return
    try {
      if (playing) {
        audioRef.current.pause()
        setPlaying(false)
      } else {
        await audioRef.current.play()
        setPlaying(true)
        setError(false)
      }
    } catch {
      setError(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={src} loop onError={handleError} />
      <button className="music-btn" onClick={toggle} title="Music on/off">
        {playing ? '🎵 Pause' : '🎵 Play'}
      </button>
      {error && (
        <p className="music-hint">Music load nahi hui — <code>public/music.mp3</code> bhi try kar rahi hoon 💖</p>
      )}
    </>
  )
}

function App() {
  return (
    <Router>
      <FloatingHearts />
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/letter">Love Letter</NavLink>
        <NavLink to="/question">A Question</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/question" element={<Question />} />
      </Routes>

      <MusicButton />
    </Router>
  )
}

export default App
