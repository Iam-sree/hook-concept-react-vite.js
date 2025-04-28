import { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const expensiveValue = useMemo(() => {
    console.log("Calculating expensive value...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total + count;
  }, [count]);

  const themeStyles = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#000',
    padding: '20px',
    marginTop: '20px',
    border: '2px solid',
  };

  return (
    <div style={themeStyles}>
      <h2>useMemo Example</h2>
      <h3>Expensive Value: {expensiveValue}</h3>
      <button onClick={() => setCount(prev => prev + 1)} style={{ margin: '5px' }}>Increment Count</button>
      <button onClick={() => setDark(prev => !prev)} style={{ margin: '5px' }}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ExpensiveCalculation;
