import React from 'react'
import Ring from '../components/ProgressRing.js'

function HomePage() {
  return (
    <section className='home'>
      <section id="homepageDagelijksDoel">
      <Ring progress={0.50} radius={30} strokeWidth={5}/>
      <section>
        <h1>Dagelijks doel</h1>
        <p>21 Kcal</p>
      </section>
    </section>
    <section id='ringenVerschillendeVoedingsw'>
      <Ring progress={0.5} radius={30} strokeWidth={8}></Ring>
      <Ring progress={0.5} radius={30} strokeWidth={8}></Ring>
      <Ring progress={0.5} radius={30} strokeWidth={8}></Ring>

    </section>
    </section>
    
    
  )
}

export default HomePage