import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert(error.message)
    else alert('Check your email for confirmation')
  }

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else alert('Signed in!')
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Login or Sign Up</h2>
      <input placeholder="email" onChange={e => setEmail(e.target.value)} /><br />
      <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={signIn}>Sign In</button>
      <button onClick={signUp}>Sign Up</button>
    </div>
  )
}
