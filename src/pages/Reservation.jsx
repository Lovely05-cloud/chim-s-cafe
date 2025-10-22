import React from 'react'

export default function Reservation(){
  return (
    <div style={{maxWidth:600, margin:'0 auto'}}>
      <h2>Reservation</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Time</label>
          <input type="time" className="form-control" required />
        </div>
        <button className="btn btn-primary">Book Reservation</button>
      </form>
    </div>
  )
}
