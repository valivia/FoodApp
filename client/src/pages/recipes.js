import React from 'react'
import styles from './recipes.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function RecipePage() {
  const recipe = 'Lasagne';
  const calories = 850;
  const description = 'nomnomnom';

  return (
    <main className={styles.recipes}>
      <section className={styles.header}>
        <h1>Recipes</h1>
      </section>

      <section className={styles.recipesWrapper}>

        <section className={styles.recipe}>
          <section className={styles.recipeHeader}>
            <section className={styles.textWrapper}>
              <h3>{recipe}</h3>
              <p>{calories} kcal</p>
            </section>
            <section className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </section>
          </section>
          
          <section className={styles.lineWrapper}>
            <div className={styles.line}></div>
          </section>

          <section className={styles.description}>
            <p>{description}</p>
          </section>
        </section>

      </section>
    </main>
  )
}

export default RecipePage