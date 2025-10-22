import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight:'60vh'}}>
      <div className="card text-center shadow-sm" style={{maxWidth:600}}>
        <div className="card-body">
          <h1 className="display-4 text-danger">404</h1>
          <h4 className="card-title">Page not found</h4>
          <p className="card-text">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn btn-primary">Return Home</Link>
        </div>
      </div>
    </div>
  )
}
