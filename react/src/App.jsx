import { useState } from 'react'
import './App.css'
import PropsLab from './PropsLab'
import DynamicE from './DynamicE'

function App() {
  const [count, setCount] = useState(0)
  const[food, setFood] = useState(Eat)

  return (
    <>
      <div>
        <DynamicE/>
        <PropsLab firstName="James"/>

        <usestate message="food"/>
       
      
      </div>

 
    </>
  )
}

export default App
