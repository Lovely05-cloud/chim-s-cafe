import React from 'react'
import { useParams } from 'react-router-dom'

const sampleItems = [
  { id:1, name:'Cappuccino', price:120, desc:'Classic espresso with steamed milk.' },
  { id:2, name:'Iced Latte', price:140, desc:'Smooth espresso over chilled milk and ice.' },
  { id:3, name:'Frappe', price:150, desc:'Blended cold coffee treat.' },
  { id:4, name:'Spaghetti', price:220, desc:'House-made pasta with savory sauce.' },
  { id:5, name:'Blueberry Muffin', price:75, desc:'Freshly baked with real blueberries.' }
]

export default function MenuItem(){
  const { id } = useParams()
  const item = sampleItems.find(i => String(i.id) === String(id))
  if (!item) return <div><h3>Item not found</h3></div>
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <p>{item.desc}</p>
        <p className="fw-bold">₱{item.price}</p>
      </div>
    </div>
  )
}
