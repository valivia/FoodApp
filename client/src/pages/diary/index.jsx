import React from 'react'
import styles from './index.module.scss'
import { Wrapper } from '../../components/layout/wrapper';
import { useDiary } from '../../util/useDiary';
import { ListHeader } from '../../components/layout/listHeader';
import { Recipe } from '../../components/recipe';

function DiaryPage() {
  const { diary, isLoading, error } = useDiary()

  return (
    <Wrapper className={styles.main}>

      <ListHeader title={'Diary'} to={"/diary/new"} />

      <section className={styles.meals}>
        {isLoading && <p>Loading...</p>}
        {error && <p>There was an error loading your diary</p>}
        {diary && diary.map((item, index) =>
          <Recipe
            key={index}
            {...item.recipe}
            displayIngredients={false}
            displayNutrients={false}
          />
        )}
        {diary && diary.length === 0 && <p>No diary entries today</p>}

      </section>
    </Wrapper>
  )
}

export default DiaryPage