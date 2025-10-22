import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import MenuLayout from './pages/MenuLayout'
import MenuItem from './pages/MenuItem'
import Reservation from './pages/Reservation'
import Feedback from './pages/Feedback'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import ThankYou from './pages/ThankYou'
import ProtectedRoute from './components/ProtectedRoute'

export default function App(){
  return (
    <div>
      <Header />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<MenuLayout/>}>
            <Route index element={<Menu/>} />
            <Route path=":id" element={<MenuItem/>} />
          </Route>
          <Route path="/reservation" element={<ProtectedRoute><Reservation/></ProtectedRoute>} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/thanks" element={<ThankYou/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </div>
  )
}
