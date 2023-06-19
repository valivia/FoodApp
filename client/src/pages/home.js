import React from 'react'
import { Dial } from '../components/dial.js'
import styles from './home.module.scss'
import { DailyGoal } from '../components/dailyGoal.jsx';
import { Wrapper } from '../components/layout/wrapper.jsx';


function HomePage() {
  return (
      <Wrapper className={styles.main}>

        <DailyGoal progress={0.2} />

        <section className={styles.dials}>
          <section className={styles.dial}>
            <Dial progress={0.5} size={5}></Dial>
            <p>Protein</p>
          </section>
          <section className={styles.dial}>
            <Dial progress={0.7} size={5}></Dial>
            <p>Fiber</p>
          </section>
          <section className={styles.dial}>
            <Dial progress={0.89} size={5}></Dial>
            <p>Fat</p>
          </section>
        </section>

      </Wrapper>
  )
}

export default HomePage