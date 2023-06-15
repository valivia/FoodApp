import React from 'react'
import { Dial } from '../components/dial.js'
import styles from './home.module.css'

function HomePage() {
  return (
    <main className={styles.home}>

      <section className={styles.dailygoal}>
        <Dial progress={0.2} size={20} />
        <section>
          <h1>Daily Goal</h1>
          <p>21 Kcal</p>
        </section>
      </section>

      <section className={styles.dials}>
        <Dial progress={0.5} size={10}></Dial>
        <Dial progress={0.7} size={10}></Dial>
        <Dial progress={0.89} size={10}></Dial>
      </section>

    </main>


  )
}

export default HomePage