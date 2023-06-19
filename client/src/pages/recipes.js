import React from 'react'
import styles from './recipes.module.scss'
import { Recipe } from '../components/recipe';
import { Wrapper } from '../components/layout/wrapper';


function RecipePage() {
  return (
    <Wrapper className={styles.main}>

      <section className={styles.header}>
        <h1>Recipes</h1>
      </section>

      <section className={styles.recipes}>
        <Recipe recipeName={'Lasagne'} calories={850} description={'nonnomnom'}></Recipe>
        <Recipe recipeName={'Pasta Bolognese'} calories={970} description={'Pasta met bolognese saus met veel groente'}></Recipe>
      </section>

    </Wrapper>
  )
}

export default RecipePage