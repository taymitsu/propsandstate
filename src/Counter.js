import { useState } from 'react'

function Counter(props) {
  const {label, value, increment} = props

  return (
    <div className="Couunter">
      <p>{label}</p>
      <h1>{value}</h1>
      <button onClick={ () => increment() }>+</button>
      <button onClick={ () => }>-</button>

    </div>
  )
}

export default Counter 