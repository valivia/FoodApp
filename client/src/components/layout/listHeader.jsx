import React from 'react';
import styles from "./listHeader.module.scss";

function ListHeader({ title, onClick }) {
  return (
    <header className={styles.main}>
      <h1>{title}</h1>
      <button className={styles.button} onClick={onClick}>+</button>
    </header>
  )
}

export { ListHeader }