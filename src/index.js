import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

const Note = ({id, important, content}) => {
  return(
    <div>
      <p>{id}</p>
      {important ? <strong>Es importante</strong> : <strong>No es importante</strong>}
      <p>{content}</p>
    </div>
  )
}

const App = () => {

  const notes = [
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

  return (
    <div>
      {notes.map(note =>  <Note key={note.id} id={note.id} important={note.important} content={note.content}/> )}
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
