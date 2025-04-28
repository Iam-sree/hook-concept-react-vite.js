// src/context/UserProvider.jsx
import { UserContext } from './UserContext';

function UserProvider({ children }) {
  const userName = 'John Doe'; // You can also use useState for dynamic

  return (
    <UserContext.Provider value={userName}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
