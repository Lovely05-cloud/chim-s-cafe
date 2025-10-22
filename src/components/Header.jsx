import React from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'

export default function Header(){
  const navigate = useNavigate();
  const location = useLocation();

  function goHome() {
    if (location.pathname !== '/') navigate('/');
    // scroll to top
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80);
  }

  function handleScrollTo(id) {
    if (location.pathname !== '/') {
      navigate('/');
      // wait for navigation then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand" onClick={(e)=>{e.preventDefault(); goHome();}}>Chim's Cafe</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a href="#" className="nav-link" onClick={(e)=>{e.preventDefault(); goHome();}}>Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link" onClick={(e)=>{e.preventDefault(); handleScrollTo('about');}}>About</a></li>
            <li className="nav-item"><a href="#" className="nav-link" onClick={(e)=>{e.preventDefault(); handleScrollTo('menu');}}>Menu</a></li>
            <li className="nav-item"><a href="#" className="nav-link" onClick={(e)=>{e.preventDefault(); handleScrollTo('reservation');}}>Reservation</a></li>
            <li className="nav-item"><a href="#" className="nav-link" onClick={(e)=>{e.preventDefault(); handleScrollTo('feedback');}}>Feedback</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
