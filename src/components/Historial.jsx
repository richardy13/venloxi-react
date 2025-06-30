import React from 'react'

export default function Historial({ items }) {
  return (
    <div className="card">
      <h2>Historial</h2>
      <ul>
        {items.map((s, i) => (
          <li key={i}>{s.fecha} – {s.nombre} ({s.tel})</li>
        ))}
      </ul>
    </div>
  )
}
