import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Login(){
  const [username, setUsername] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  function handleSubmit(e){
    e.preventDefault()
    if (!username.trim()) return
    login(username.trim())
    navigate(from, { replace: true })
  }

  return (
    <div style={{maxWidth:400, margin:'4rem auto'}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input className="form-control" value={username} onChange={e=>setUsername(e.target.value)} required />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}
