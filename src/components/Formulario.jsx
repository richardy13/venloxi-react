import React, { useState } from 'react'

export default function Formulario({ onNueva }) {
  const [nombre, setNombre] = useState('')
  const [tel, setTel] = useState('')
  const [detalles, setDetalles] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre || !tel || !detalles) return alert('Completa todos los campos')
    const solicitud = {
      nombre, tel, detalles,
      fecha: new Date().toLocaleString()
    }
    onNueva(solicitud)
    alert('Solicitud enviada')
  }

  const handleWhats = () => {
    const msg = `Hola, soy ${nombre}. WhatsApp: ${tel}. Detalles: ${detalles}`
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="card">
      <h2>Solicitar Cambio</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre completo" value={nombre} onChange={e => setNombre(e.target.value)} />
        <input placeholder="WhatsApp" value={tel} onChange={e => setTel(e.target.value)} />
        <textarea placeholder="Detalles destinatario" value={detalles} onChange={e => setDetalles(e.target.value)} />
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleWhats}>WhatsApp</button>
      </form>
    </div>
  )
}
