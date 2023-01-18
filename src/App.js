import './App.css';
import Counter from './Counter'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState([ 4, 8, 0 ])

  return (
    <div className="App">
      {count.map((val, i) => (
        <Counter 
          label={`Counter ${i}`}
          value={val}

          increment={ () => {
            const newCount = [...count]
            newCount[i] = val + 1
            setCount(newCount)
          } }

          decrement={() => {
            const newCount = [...count]
            newCount[i] = val - 1
            setCount(newCount)
          }}

        />
      ))}

      <h2>Total: {count.reduce((acc, val) => acc + val, 0 )}</h2>
      <button onClick={ () => {
        const newCount = [...count]
        newCount.push(0)
        setCount(newCount)
      }}>Add Counter</button>
    </div>
  );
}

export default App;
