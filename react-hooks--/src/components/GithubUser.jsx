/* useeffect */

import { useEffect, useState } from 'react';

function GithubUser() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Iam-sree'); // Change username if needed
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching GitHub user:', error);
      }
    };

    fetchUser();
  }, []); // Empty dependency array -> runs once when component mounts

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src={userData.avatar_url} alt="User Avatar" width="150" style={{ borderRadius: '50%' }} />
      <h1>{userData.name}</h1>
      <p>@{userData.login}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      <p>Public Repos: {userData.public_repos}</p>
      <a href={userData.html_url} target="_blank" rel="noreferrer">View GitHub Profile</a>
    </div>
  );
}

export default GithubUser;
