/* useref */

import { useState, useRef, useEffect } from 'react';

function InputsExample() {
  // Controlled Input
  const [controlledValue, setControlledValue] = useState('');

  // Uncontrolled Input
  const uncontrolledRef = useRef(null);

  useEffect(() => {
    console.log('Controlled Input Changed:', controlledValue);
  }, [controlledValue]); // Watch controlled value

  useEffect(() => {
    console.log('Uncontrolled Input Ref:', uncontrolledRef.current);
  }, []); // Only once after mount

  const handleUncontrolledRead = () => {
    console.log('Uncontrolled Input Current Value:', uncontrolledRef.current.value);
    alert(`Uncontrolled Input Value: ${uncontrolledRef.current.value}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Controlled Input */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Controlled Input</h2>
        <input
          type="text"
          value={controlledValue}
          onChange={(e) => setControlledValue(e.target.value)}
          placeholder="Type controlled input..."
        />
        <p>Value: {controlledValue}</p>
      </div>

      {/* Uncontrolled Input */}
      <div>
        <h2>Uncontrolled Input</h2>
        <input
          type="text"
          ref={uncontrolledRef}
          placeholder="Type uncontrolled input..."
        />
        <br />
        <button onClick={handleUncontrolledRead} style={{ marginTop: '10px' }}>
          Read Uncontrolled Input
        </button>
      </div>
    </div>
  );
}

export default InputsExample;
