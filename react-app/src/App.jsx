import React, { useState, useEffect } from 'react'
import './styles.css'

function App() {
  
  const [podcasts, setPodcasts] = useState([])        
  const [loading, setLoading] = useState(true)        
  const [error, setError] = useState(null)            

  return (
    <div>
      <header className="app-header">
        <h1>🎙️ Podcast App</h1>
      </header>
      <main className="grid">
        <p>Podcast app</p>
      </main>
    </div>
  )
}

export default App
