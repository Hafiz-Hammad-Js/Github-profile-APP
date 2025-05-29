import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Github from './Component/Github'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Github />
    </>
  )
}

export default App
