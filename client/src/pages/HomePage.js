import React from 'react'
import Ring from '../components/ring.js'

function HomePage() {
  return (
    <section className='home'>
      <section id="homepageDagelijksDoel">
      <Ring progress={0.2} size={20}/>
      <section>
        <h1>Dagelijks doel</h1>
        <p>21 Kcal</p>
      </section>
    </section>
    <section id='ringenVerschillendeVoedingsw'>
      <Ring progress={0.5} size={10}></Ring>
      <Ring progress={0.7} size={10}></Ring>
      <Ring progress={0.89} size={10}></Ring>

    </section>
    </section>
    
    
  )
}

export default HomePage