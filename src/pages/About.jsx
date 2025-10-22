import React from 'react'

export default function About(){
  return (
    <section className="about-section" style={{padding:'5rem 5%', backgroundColor:'#f8f3e8'}}>
      <div style={{maxWidth:1200, margin:'0 auto', textAlign:'center'}}>
        <h2 style={{fontSize:'2.2rem', color:'#8b5a2b', marginBottom:'2rem'}}>Our Story</h2>
        <div style={{display:'flex', flexWrap:'wrap', gap:'2rem', justifyContent:'center', alignItems:'center'}}>
          <div style={{flex:1, minWidth:300}}>
            <img src="https://i.pinimg.com/1200x/8d/9e/1d/8d9e1d9eeee3f433dd33809e327ff692.jpg" alt="Cafe interior" style={{width:'100%', borderRadius:10, boxShadow:'0 5px 15px rgba(0,0,0,0.1)'}} />
          </div>
          <div style={{flex:1, minWidth:300, textAlign:'left'}}>
            <h3 style={{fontSize:'1.5rem', color:'#5a3e2b', marginBottom:'1rem'}}>Brewing Community Since 2010</h3>
            <p style={{marginBottom:'1rem'}}>Founded in a small corner of the city, Chim's Cafe has grown to become a beloved gathering place for coffee enthusiasts and food lovers alike. We call our wonderful guests "chimmies"—you're always part of our family here!</p>
            <p>We source our beans from sustainable farms around the world, roast them in-house, and brew each cup with care. Our pasta dishes are made fresh daily using local ingredients whenever possible.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
