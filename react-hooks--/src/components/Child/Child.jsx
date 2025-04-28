// src/components/Child/Child.jsx
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function Child() {
  const userName = useContext(UserContext);

  return (
    <div style={{ border: '2px solid green', padding: '20px', margin: '20px' }}>
      <h3>Child Component</h3>
      <p>User from Context: <strong>{userName}</strong></p>
    </div>
  );
}

export default Child;
