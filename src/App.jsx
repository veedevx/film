import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-5'>
      <Navbar/>
      <div className=' font-prime'>hello</div>

    </div>
  )
}

export default App

