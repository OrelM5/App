import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
const [selectedCurrency, setSelectedCurrency] = useState("ILS")


function App() {

  return (
    <>
      <div>
        Forex Calculator
      </div>
      <div>
        choose the requested currency:
        <select value={selectedCurrency}>
          <option value={"USD"}>US dollar</option>
          <option value={"ILS"}>Shekel</option>
          <option value={"EUR"}>Euro</option>
          <option value={"GBP"}>Pound</option>
        </select>
      </div>
    </>
  )
}

export default App
