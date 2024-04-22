import { useState } from 'react'
import './App.css'
import { Card } from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let obj1 = [
    {name: "macBook"},
    {name: "Iphone"},
    {name: "EarPods"},
    {name: "AirBook"}
  ]
  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl mb-4'>TailWind CSS</h1>
      <Card proName="MacBook"/>
      <Card proName="Iphone"/>
      <Card />
    </>
  )
}

export default App
