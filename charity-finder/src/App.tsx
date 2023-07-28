import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-5xl font-bold'>Charity Finder</h1>
      <div className="card p-10 m-10">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='text-xl font-bold'>
          Find a charity based on your criteria. 
        </p>
      </div>
      <p className="read-the-docs text-xl">
        See the popular charities:
      </p>
    </>
  )
}

export default App
