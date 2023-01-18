import './App.css';
import Counter from './Counter'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState([ 4, 8 ])

  return (
    <div className="App">
      {count.map((val, i) => (
        <Counter 
          label={`Counter: ${i}`}
          value={val}
          increment={ () => {
            const newCount = [...count]
            newCount[i] = val + 1
            setCount(newCount)
          } }
        />
      ))}
    </div>
  );
}

export default App;
