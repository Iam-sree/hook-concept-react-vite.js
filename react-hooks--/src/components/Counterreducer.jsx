import { useReducer } from 'react';

// Step 1: Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

function Counterreducer() {
  // Step 2: useReducer hook
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>useReducer Counter</h2>
      <h1>{state.count}</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => dispatch({ type: 'INCREMENT' })} style={{ padding: '10px' }}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })} style={{ padding: '10px' }}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })} style={{ padding: '10px' }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counterreducer;
