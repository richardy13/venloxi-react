import React, { useState } from 'react'

const tasas = {
  USD: { COP: 4000, VES: 40 },
  COP: { USD: 0.00025, VES: 0.01 },
  VES: { USD: 0.025, COP: 100 },
}

export default function Calculadora() {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('COP')
  const [monto, setMonto] = useState('')
  const [resultado, setResultado] = useState('')

  const handleCalc = () => {
    const num = parseFloat(monto)
    if (isNaN(num)) return alert('Ingresa un monto válido')
    const tasa = tasas[from][to] || 1
    setResultado((num * tasa).toFixed(2))
  }

  return (
    <div className="card">
      <h2>Calculadora de Cambio</h2>
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="COP">COP</option>
        <option value="VES">VES</option>
      </select>
      <input type="number" placeholder="Monto" value={monto} onChange={(e) => setMonto(e.target.value)} />
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="COP">COP</option>
        <option value="VES">VES</option>
      </select>
      <button onClick={handleCalc}>Calcular</button>
      <p>Resultado: {resultado} {to}</p>
    </div>
  )
}
