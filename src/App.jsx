
import './App.css'
import { useState } from 'react'
import Registro from './Componentes/Registro'
import Ingreso from './Componentes/Ingreso'

function App() {
const [pagina,setPagina]=useState(false)

function pageState() {
  setPagina(!pagina)
}
  return (
    <>
    {!pagina?<Ingreso pageState={pageState}/>:<Registro pageState={pageState}/>  }
    </>
    
  )
}

export default App
