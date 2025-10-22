import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }){
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('chims_user')) || null } catch { return null }
  })

  useEffect(() => {
    localStorage.setItem('chims_user', JSON.stringify(user))
  }, [user])

  function login(username){
    setUser({ name: username })
  }
  function logout(){
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}
