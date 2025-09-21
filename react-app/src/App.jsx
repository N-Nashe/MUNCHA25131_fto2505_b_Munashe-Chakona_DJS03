import React, { useState, useEffect } from 'react'
import {genres} from '../data.js'
import './styles.css'

function App() {
  
  const [podcasts, setPodcasts] = useState([])        
  const [loading, setLoading] = useState(true)        
  const [error, setError] = useState(null)  
  
  const getGenreNames = (genreIds) => {
    return genreIds.map(id => {
      const foundGenre = genres.find(genre => genre.id === id)
      return foundGenre ? foundGenre.title : 'Unknown'
    }).join(', ')
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }
  
  useEffect(() => {
 const fetchPodcasts = async () => {
    
  try{
    const response = await fetch ('https://podcast-api.netlify.app/')
    
    if (!response.ok){
      throw new Error('Failed to load podcasts!')
    }
    const data = await response.json()
    setPodcasts(data)
  } catch (error){
    setError(error.message)

  } finally{
    setLoading(false);
  }

  }

  fetchPodcasts()
 }, [])

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
