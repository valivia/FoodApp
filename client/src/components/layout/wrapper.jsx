import React from 'react';
import styles from "./wrapper.module.scss";
import { Navigation } from './nav';

function Wrapper(props) {
  return (
    <div className={styles.wrapper}>
      <Navigation />

      <main className={styles.content + " " + props.className}>
        {props.children}
      </main>
    </div>
  )
}

export { Wrapper }