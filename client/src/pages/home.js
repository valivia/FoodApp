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
  const { user } = useUser();

  const calculate = (input) => {
    if (!input || input.length === 0) return {
      energy: 1,
      protein: 1,
      fat: 1,
      fiber: 1,
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

  return (
    <Wrapper className={styles.main}>
      {diaryError && <p>Failed to load data</p>}

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