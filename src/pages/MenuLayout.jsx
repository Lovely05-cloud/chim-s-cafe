import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function MenuLayout(){
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Menu</h2>
        <div>
          <Link to="/menu" className="btn btn-sm btn-outline-secondary me-2">All</Link>
          <Link to="/menu/1" className="btn btn-sm btn-outline-secondary">Sample Item</Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
