// src/components/Parent/Parent.jsx
import Child from '../Child/Child';

function Parent() {
  return (
    <div style={{ border: '2px solid blue', padding: '20px', margin: '20px' }}>
      <h2>Parent Component</h2>
      <Child />
    </div>
  );
}

export default Parent;
