import React from 'react'
import styles from './recipes.module.css'
import { Recipe } from '../components/recipe';

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
        <Recipe recipeName={'Lasagne'} calories={850} description={'nonnomnom'}></Recipe>
        <Recipe recipeName={'Pasta Bolognese'} calories={970} description={'Pasta met bolognese saus met veel groente'}></Recipe>


      </section>
    </main>
  )
}

export default RecipePage