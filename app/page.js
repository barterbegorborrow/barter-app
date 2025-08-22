'use client';
import { useState } from 'react';

export default function HomePage() {
  const [feed, setFeed] = useState([
    { id: 1, user: 'Alice', content: 'I have a bike to trade' },
    { id: 2, user: 'Bob', content: 'Looking for books' },
  ]);

  const [newItem, setNewItem] = useState('');
  const [username, setUsername] = useState('');

  const addPost = () => {
    if (!newItem || !username) return;
    setFeed([{ id: Date.now(), user: username, content: newItem }, ...feed]);
    setNewItem('');
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Barter App Feed</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Your name"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="New post"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <button onClick={addPost}>Post</button>
      </div>

      <h2>User Feed:</h2>
      <ul>
        {feed.map(item => (
          <li key={item.id}>
            <strong>{item.user}</strong>: {item.content}
          </li>
        ))}
      </ul>
    </main>
  );
} 
