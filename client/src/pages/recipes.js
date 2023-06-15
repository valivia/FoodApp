import React from 'react'
import styles from './recipes.module.css'

function RecipePage() {
  return (
    <main className={styles.recipes}>
      <section className={styles.header}>
        <h1>Recipes</h1>
      </section>
      <section className={styles.boxes}>
        <section className={styles.box}>

          <section className={styles.boxHeader}>
            <h3>Lasagne</h3>
            <p>800kcal</p>
          </section>

          <section className={styles.lineBox}>
            <div className={styles.line}></div>
          </section>

          <section className={styles.description}>
            <p>nomnomnom</p>
          </section>

        </section>
        <section className={styles.box}>

          <section className={styles.boxHeader}>
            <h3>Lasagne</h3>
            <p>800kcal</p>
          </section>

          <section className={styles.lineBox}>
            <div className={styles.line}></div>
          </section>

          <section className={styles.description}>
            <p>nomnomnom</p>
          </section>

        </section>
        <section className={styles.box}>

          <section className={styles.boxHeader}>
            <h3>Lasagne</h3>
            <p>800kcal</p>
          </section>

          <section className={styles.lineBox}>
            <div className={styles.line}></div>
          </section>

          <section className={styles.description}>
            <p>nomnomnom</p>
          </section>

        </section>
      </section>
    </main>
  )
}

export default RecipePage