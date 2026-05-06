import { useState } from 'react'
import JokesData from './components/Jokes/index.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      
      <h3 className='main-jokes-heading'>Jokes</h3>
      <JokesData/>
    </div>
  )
}

export default App
