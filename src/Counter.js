function Counter(props) {
  const { label, value, increment, decrement } = props

  return (
    <div className="Couunter">
      <p>{label}</p>
      <h1>{value}</h1>
      <button onClick={ () => increment() }>+</button>
      <button onClick={ () => decrement() }>-</button>

    </div>
  )
}

export default Counter 