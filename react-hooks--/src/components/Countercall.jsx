import { useState, useCallback } from 'react';

function Countercall() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div style={{ border: '1px solid purple', padding: '20px', marginTop: '20px' }}>
      <h2>useCallback Counter</h2>
      <h1>{count}</h1>
      <button onClick={increment} style={{ margin: '5px' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '5px' }}>Decrement</button>
      <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
    </div>
  );
}

export default Countercall;
