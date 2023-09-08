import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <div class="relative h-[400px] w-[300px] rounded-md">

     <Card  username = 'Nikhil' btnText = 'click Me'/>
     <Card username= "Karan" />

</div>

    </>
  )
}

export default App
