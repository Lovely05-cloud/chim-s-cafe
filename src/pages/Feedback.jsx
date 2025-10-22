import React from 'react'

export default function Feedback(){
  return (
    <div style={{maxWidth:600, margin:'0 auto'}}>
      <h2>Feedback</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" required></textarea>
        </div>
        <button className="btn btn-primary">Submit Feedback</button>
      </form>
    </div>
  )
}
