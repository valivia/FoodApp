import React from 'react'
import { Dial } from '../components/dial.js'
import styles from './home.module.scss'
import { DailyGoal } from '../components/dailyGoal.jsx';
import { Wrapper } from '../components/layout/wrapper.jsx';
import { useDiary } from '../util/useDiary';
import { useMemo } from 'react';
import { combineNutrients } from '../util/recipe';
import { useUser } from '../util/useUser';


function HomePage() {
  const { diary, error: diaryError } = useDiary()
  const { user, error: userError } = useUser();

  const calculate = (input) => {
    if (!input) return {
      energy: 0,
      protein: 0,
      fat: 0,
      fiber: 0,
    };

    const total = input.reduce((acc, curr) => {
      const nutrients = combineNutrients(curr.recipe.ingredients);

      for (const nutrient of Object.keys(nutrients)) {
        if (acc[nutrient]) {
          acc[nutrient] += nutrients[nutrient];
        } else {
          acc[nutrient] = nutrients[nutrient];
        }
      }
      return acc;
    }, {});


    return {
      energy: total.ENERCC / 2000,
      protein: total.PROT / 50,
      fat: total.FAT / 70,
      fiber: total.FIBT / 25,
    };
  };

  const progress = useMemo(() => calculate(diary), [diary, user]);


  if (diaryError || userError) return <p>Something went wrong</p>

  return (
    <Wrapper className={styles.main}>

      <DailyGoal progress={progress.energy} />

      <section className={styles.dials}>
        <section className={styles.dial}>
          <Dial progress={progress.protein} size={5}></Dial>
          <p>Protein</p>
        </section>
        <section className={styles.dial}>
          <Dial progress={progress.fiber} size={5}></Dial>
          <p>Fiber</p>
        </section>
        <section className={styles.dial}>
          <Dial progress={progress.fat} size={5}></Dial>
          <p>Fat</p>
        </section>
      </section>

    </Wrapper>
  )
}

export default HomePage