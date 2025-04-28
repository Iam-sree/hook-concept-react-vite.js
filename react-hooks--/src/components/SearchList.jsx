import { useState, useTransition } from 'react';

const namesList = Array.from({ length: 10000 }, (_, i) => `User ${i + 1}`);

function SearchList() {
  const [input, setInput] = useState('');
  const [list, setList] = useState(namesList);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const filteredList = namesList.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setList(filteredList);
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>useTransition Search Filter</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search user..."
        style={{ padding: '10px', width: '300px' }}
      />
      {isPending && <p>Loading...</p>}
      <ul>
        {list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
