import { useState } from 'react'

function Counter(props) {
  const [count, setCount] = useState(6)

  return (
    <div className="Couunter">
      <p>{props.label}</p>
      <h1>{count}</h1>
      <button onClick={ () => setCount(count + 1)}>+</button>
      <button onClick={ () => setCount(count - 1)}>-</button>

    </div>
  )
}

export default Counter 