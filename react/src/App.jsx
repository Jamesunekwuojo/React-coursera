import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsLab from './PropsLab'
import DynamicE from './DynamicE'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <DynamicE/>
        <PropsLab firstName="James"/>
        <p firstName></p>
      </div>

 
    </>
  )
}

export default App
