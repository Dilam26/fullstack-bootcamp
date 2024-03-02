import './App.css'
import Mensaje from './Mensaje'

const Decripcion = () => {
  return <p>Esta es la pagina de react creada por mi</p>
}

function App() {

  return (
    <div className="App">
      <Mensaje message='Estamos trabajando'/>
      <Mensaje message='en un curso'/>
      <Mensaje message='de React'/>
      <Decripcion />
    </div>
  )
}

export default App
