import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Home() {
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase
      .from('profiles')
      .insert([{ username, bio }])

    if (error) {
      console.error(error)
      setMessage('Error adding profile.')
    } else {
      setMessage('Profile added successfully!')
      setUsername('')
      setBio('')
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Welcome to BarterBegOrBorrow</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <label>
          Bio:
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  )
}
