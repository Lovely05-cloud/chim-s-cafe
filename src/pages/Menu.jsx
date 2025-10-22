import React from 'react'
import { Link } from 'react-router-dom'

const sampleItems = [
  { id:1, name:'Cappuccino', price:120, desc:'Classic espresso with steamed milk.', image:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1'},
  { id:2, name:'Iced Latte', price:140, desc:'Smooth espresso over chilled milk and ice.', image:'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2'},
  { id:3, name:'Frappe', price:150, desc:'Blended cold coffee treat.', image:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3'},
  { id:4, name:'Spaghetti', price:220, desc:'House-made pasta with savory sauce.', image:'https://images.unsplash.com/photo-1604908177522-8f6f6e1d2b59?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4'},
  { id:5, name:'Blueberry Muffin', price:75, desc:'Freshly baked with real blueberries.', image:'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5'}
]

export default function Menu(){
  return (
    <div>
      <div className="row">
        {sampleItems.map(i=> (
          <div className="col-md-4 mb-3" key={i.id}>
            <div className="card h-100">
              <img src={i.image} alt={i.name} className="card-img-top" style={{height:160,objectFit:'cover'}} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{i.name}</h5>
                <p className="card-text">{i.desc}</p>
                <p className="fw-bold">₱{i.price}</p>
                <div className="mt-auto d-flex gap-2">
                  <Link to={`/menu/${i.id}`} className="btn btn-sm btn-outline-secondary">Details</Link>
                  <button className="btn btn-sm btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
