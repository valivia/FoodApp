import React from 'react'
import styles from './home.module.scss'
import { Wrapper } from '../components/layout/wrapper.jsx';
import { useDiary } from '../util/useDiary';
import { useMemo } from 'react';
import { calculateGoal, calculateProgress, combineNutrients } from '../util/nutrients.js';
import { useUser } from '../util/useUser';
import { ListHeader } from '../components/layout/listHeader.jsx';
import { Table } from '../components/home/table.jsx';
import moment from 'moment';
import { Goals } from '../components/home/goals';


function HomePage() {
  const { diary, error: diaryError } = useDiary()
  const { user } = useUser();

  const calculate = (input) => {

    if (!input || input.length === 0)
      return {
        progress: {},
        total: {},
        goal: {}
      };

    const nutrients = input.reduce((acc, curr) => {
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

    const goal = calculateGoal(nutrients, user);
    const progress = calculateProgress(nutrients, goal);

    return {
      progress,
      total: nutrients,
      goal,
    };
  };

  const { goal, progress, total } = useMemo(() => calculate(diary), [diary, user, calculate]);

  console.log({ goal, progress, total });

  if (!diary) {
    return (
      <Wrapper className={styles.main}>
        <ListHeader title={moment().format("ddd, D MMM")} />
        <p>Loading...</p>
      </Wrapper>
    )
  }

  return (
    <Wrapper className={styles.main}>

      <ListHeader title={moment().format("ddd, D MMM")} />
      {diaryError && <p>Failed to load data</p>}

      <h2 className={styles.title}>Today's Goals</h2>
      <Goals goal={goal} progress={progress} total={total} />

      <h2 className={styles.title}>Today's Nutrition</h2>
      <Table goal={goal} total={total} />

    </Wrapper>
  )
}

export default HomePage