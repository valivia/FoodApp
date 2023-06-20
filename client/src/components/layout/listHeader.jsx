import React from 'react';
import styles from "./listHeader.module.scss";
import { Link } from 'react-router-dom';

function ListHeader({ title, to }) {
  return (
    <header className={styles.main}>
      <h1>{title}</h1>
      <Link className={styles.button} to={to}>+</Link>
    </header>
  )
}

export { ListHeader }