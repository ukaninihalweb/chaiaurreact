import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, chaiCounter] = useState(15)
  
  // let counter = 5
  
  const addValue = ()=>{
    // console.log("Clicked",counter);
    // counter = counter + 1
    chaiCounter(prevCounter => prevCounter + 1)
    chaiCounter(prevCounter => prevCounter + 1)
    chaiCounter(prevCounter => prevCounter + 1)
    chaiCounter(prevCounter => prevCounter + 1)
  }
  
  let removeValue=()=>{
    if(counter <= 0){
      alert("value is not remove value if value less than zero or value is negative value");
    }else{
      chaiCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}
    >Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>

    </>
  )
}

export default App
