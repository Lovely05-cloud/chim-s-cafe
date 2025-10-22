import React from 'react'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'

export default function Home(){
  const navigate = useNavigate()

  function handleReservation(e){
    e.preventDefault()
    // form validation would go here
    navigate('/thanks', { state: { type: 'reservation' } })
  }

  function handleFeedback(e){
    e.preventDefault()
    navigate('/thanks', { state: { type: 'feedback' } })
  }

  return (
    <div>
      <section id="home" className="hero" style={{minHeight:'70vh'}}>
        <div className="hero-content">
          <h1>Welcome Chimmies</h1>
          <p>Experience the perfect blend of cozy atmosphere and exceptional coffee</p>
          <a href="/menu" className="btn">View Our Menu</a>
        </div>
      </section>

      <section id="about" className="py-5">
        <div className="container">
          <h2>About</h2>
          <p>We brew community since 2010. Delicious coffee and homemade pasta.</p>
        </div>
      </section>

      <section id="menu" className="py-5 bg-light">
        <div className="container">
          <h2>Menu</h2>
          <Menu />
        </div>
      </section>

      <section id="reservation" className="py-5">
        <div className="container" style={{maxWidth:700}}>
          <h2>Reservation</h2>
          <form onSubmit={handleReservation}>
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
      </section>

      <section id="feedback" className="py-5 bg-light">
        <div className="container" style={{maxWidth:700}}>
          <h2>Feedback</h2>
          <form onSubmit={handleFeedback}>
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
      </section>
      <footer>
        <div className="footer-content">
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
          <p>© 2023 Chim's Cafe. All rights reserved.</p>
          <p>Designed with love for coffee and community</p>
        </div>
      </footer>
    </div>
  )
}
