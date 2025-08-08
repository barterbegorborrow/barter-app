import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function TestPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from('posts').select('*')
      if (error) console.error('Fetch error:', error)
      else setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <div>
      <h1>Test Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
