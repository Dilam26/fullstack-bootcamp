import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Note } from './components/Note'


const App = () => {

  const props = [
    {
      id: 1,
      content: 'HTML is easy',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      important: true
    }
  ]

  const [notes, setNotes] = useState(props)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(newNote)
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote, 
      important: Math.random() < 0.5
    }

    setNotes(notes.concat(noteToAddToState))
    setNewNote('')

  }

  const handleShowAll = () =>{
    setShowAll(() => !showAll)
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll ? 'Show only important' : 'Show all'}</button>
      {notes
        .filter(note => {
          if (showAll === true) return true
          return note.important === true
        })
        .map(note =>  <Note key={note.id} id={note.id} important={note.important} content={note.content}/> )}

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={newNote} type='text' />
        <button>Crear nota</button>
      </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
