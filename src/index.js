import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Note } from './components/Note'
import { getAllNotes } from './services/notes/getAllNotes'
import { createNote } from './services/notes/createNote'


const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    getAllNotes()
      .then((notes) => {
        setNotes(notes)
      })
  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    const noteToAddToState = {
      title: newNote, 
      body: newNote,
      userId: 1
    }

    createNote(noteToAddToState)
      .then(newNote => {
        setNotes((prevNotes) => [...prevNotes, newNote])
      })
    

    // setNotes(notes.concat(noteToAddToState))
    setNewNote('')

  }



  return (
    <div>
      <h1>Notes</h1>
      {notes
        .map(note =>  <Note key={note.id} id={note.id} title={note.title} body={note.body}/> )}

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
