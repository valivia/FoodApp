import React from 'react'
import { Dial } from '../components/dial.js'
import styles from './home.module.css'

function HomePage() {
  return (
    <main className={styles.home}>

      <section className={styles.dailygoal}>
      <section>
          <h1>Daily Goal</h1>
          <p>2100 Kcal</p>
        </section>
        <Dial progress={0.2} size={8} />
        
      </section>

      <section className={styles.dials}>
        <Dial progress={0.5} size={5}></Dial>
        <Dial progress={0.7} size={5}></Dial>
        <Dial progress={0.89} size={5}></Dial>
      </section>

    </main>


  )
}

export default HomePage