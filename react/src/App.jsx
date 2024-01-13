import { useState } from 'react'
import './App.css'
import PropsLab from './PropsLab'
import DynamicE from './DynamicE'
import Usestate from './usestate'

function App() {
  const [count, setCount] = useState(0)
  const[food, setFood] = useState('Eat')

  function updatestste(){
    setFood('Drink')
  }

  return (
    <>
      <div>
        <DynamicE/>
        <PropsLab firstName="James"/>

        <Usestate message ={food  + "orange"}/>
        <button onClick={updatestste}> click me to update</button>

      
       
      
      </div>

 
    </>
  )
}

export default App
