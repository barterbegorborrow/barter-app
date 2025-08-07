import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function StoragePage() {
  const [file, setFile] = useState(null)
  const [urls, setUrls] = useState([])

  const uploadFile = async () => {
    const { data, error } = await supabase.storage
      .from('user-files')
      .upload(`uploads/${file.name}`, file)

    if (error) alert(error.message)
    else alert('File uploaded!')
  }

  const listFiles = async () => {
    const { data } = await supabase.storage
      .from('user-files')
      .list('uploads')

    const publicUrls = data.map(file =>
      supabase.storage.from('user-files').getPublicUrl(`uploads/${file.name}`).data.publicUrl
    )

    setUrls(publicUrls)
  }

  useEffect(() => {
    listFiles()
  }, [])

  return (
    <div style={{ padding: 40 }}>
      <h2>Upload a file</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>

      <h3>Your files:</h3>
      <ul>
        {urls.map(url => (
          <li key={url}><a href={url} target="_blank" rel="noreferrer">{url}</a></li>
        ))}
      </ul>
    </div>
  )
}
