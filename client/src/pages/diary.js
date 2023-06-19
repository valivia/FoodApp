import React from 'react'
import styles from './diary.module.scss'
import { Food } from '../components/food'
import { Wrapper } from '../components/layout/wrapper';

function DiaryPage() {
  return (
    <Wrapper className={styles.main}>

      <header className={styles.header}>
        <h1>Food Diary</h1>
        <button className={styles.addButton}>+</button>
      </header>

      <section className={styles.meals}>
        <h2>Breakfast</h2>
        <Food foodName={'Egg'} protein={7.8} fiber={0} fat={90}></Food>
        <h2>Lunch</h2>
        <Food foodName={'Yoghurt'} protein={10} fiber={10} fat={4}></Food>
        <h2>Diner</h2>
        <Food foodName={'Rice'} protein={4} fiber={20} fat={0}></Food>
        <Food foodName={'Chicken'} protein={30} fiber={0} fat={20}></Food>

      </section>
    </Wrapper>
  )
}

export default DiaryPage