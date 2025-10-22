import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function ThankYou(){
  const loc = useLocation()
  const type = loc.state?.type || 'submission'
  return (
    <div className="text-center" style={{marginTop:'4rem'}}>
      <h2>Thank you!</h2>
      <p>Your {type} has been received. We'll contact you shortly.</p>
      <Link to="/" className="btn btn-outline-primary">Return Home</Link>
    </div>
  )
}
