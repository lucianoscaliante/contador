
import { useState } from 'react'
import ContadorDisplay from '../components/ContadorDisplay'

export default function Home() {
  const [numero, setNumero] = useState(0)

  const Incremento = () => setNumero(numero + 1)
  const Decremento = () => setNumero(numero - 1)

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h1>Contador</h1>
      <ContadorDisplay numero={numero} />
      <div>
        <button onClick={Decremento}>-</button>
        <button onClick={Incremento}>+</button>
      </div>
      
    </div>
  )
}
