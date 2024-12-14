import { useState } from 'react'
import './index.css'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Nihal",
    age : 20
  }
  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 p-3 text-black rounded-xl'>tailwind test</h1><br />
      <Card username = "chaiaurcode" someObj={newArr} /><br />
      <Card username='nihal' /><br />
    </>
  )
}

export default App
