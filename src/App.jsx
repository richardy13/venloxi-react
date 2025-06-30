import React, { useState, useEffect } from 'react'
import Calculadora from './components/Calculadora'
import Formulario from './components/Formulario'
import Historial from './components/Historial'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [historial, setHistorial] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('historial')) || []
    setHistorial(saved)
  }, [])

  const addSolicitud = (solicitud) => {
    const nuevo = [solicitud, ...historial]
    setHistorial(nuevo)
    localStorage.setItem('historial', JSON.stringify(nuevo))
  }

  return (
    <div className="App">
      <header>
        <h1>Venloxi React Final</h1>

        <p>Cambios entre USD, COP y Bs.</p>
        <ThemeToggle />
      </header>
      <main>
        <Calculadora />
        <Formulario onNueva={addSolicitud} />
        <Historial items={historial} />
      </main>
    </div>
  )
}

export default App
