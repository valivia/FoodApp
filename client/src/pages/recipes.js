import React from 'react'
import styles from './recipes.module.scss'
import { Recipe } from '../components/recipe';
import { Wrapper } from '../components/layout/wrapper';
import { useRecipe } from '../util/useRecipe';
import { ListHeader } from '../components/layout/listHeader';

function RecipePage() {
  const { recipes, isLoading, error } = useRecipe()
  console.log(recipes)

  return (
    <Wrapper className={styles.main}>

      <ListHeader title={'Recipes'} />

      <section className={styles.recipes}>
        {isLoading && <p>Loading...</p>}
        {error && <p>There was an error loading your recipes</p>}
        {recipes && recipes.map((recipe, index) => <Recipe key={index} {...recipe} />)}
        {recipes && recipes.length === 0 && <p>You have no recipes</p>}
      </section>

    </Wrapper>
  )
}

export default RecipePage