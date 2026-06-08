import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', background: '#1d3359' }}>
        <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
        <Link to="/about" style={{ color: 'white' }}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div style={{ padding: '2rem' }}>Home page placeholder</div>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}


