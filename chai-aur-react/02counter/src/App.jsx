import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setcounter] = useState(0)
 
// let counter = 15
 
const Addvalue = () => {
if(counter < 20){
  counter = counter + 1
  setcounter(counter)
}
}

const Removevalue = () => {
 if (counter > 0) {
  counter = counter - 1
  setcounter(counter)
 }
}

const Reset = () => setcounter(0)

  return (
    <>
     
    <h1>Nikhil</h1>
    <h2>Counter Value : {counter}</h2>

    <button
    onClick={Addvalue}
    >Add value {counter}</button>
    <button
    onClick={Removevalue}
    >Remove value {counter}</button>

    <button onClick={Reset}>Reset {counter}</button>
    

    <p>footer: {counter} </p>
      
    </>
  )
}

export default App
