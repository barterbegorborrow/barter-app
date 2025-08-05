// pages/index.js
import { useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Home() {
  useEffect(() => {
    async function fetchData() {
      let { data, error } = await supabase.from('profiles').select('*')
      console.log(data, error)
    }
    fetchData()
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Welcome to BarterBegOrBorrow</h1>
      <p>Your app is connected to Supabase!</p>
    </div>
  )
}
