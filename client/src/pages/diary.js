import React from 'react'
import styles from './diary.module.scss'
import { DiaryItem } from '../components/diaryItem'
import { Wrapper } from '../components/layout/wrapper';
import { useDiary } from '../util/useDiary';
import { ListHeader } from '../components/layout/listHeader';

function DiaryPage() {
  const { diary, isLoading, error } = useDiary()

  return (
    <Wrapper className={styles.main}>

      <ListHeader title={'Diary'} />

      <section className={styles.meals}>
        {isLoading && <p>Loading...</p>}
        {error && <p>There was an error loading your diary</p>}
        {diary && diary.map((item, index) => <DiaryItem key={index} {...item} />)}
        {diary && diary.length === 0 && <p>No diary entries today</p>}

      </section>
    </Wrapper>
  )
}

export default DiaryPage