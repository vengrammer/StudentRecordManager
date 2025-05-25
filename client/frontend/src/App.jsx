import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Route from './Route'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Route/>
    </>
  )
}

export default App
