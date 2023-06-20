import React from 'react';
import styles from "./wrapper.module.scss";
import { Navigation } from './nav';
import { useUser } from '../../util/useUser';
import { useNavigate } from 'react-router-dom';

function Wrapper(props) {
  const navigate = useNavigate();
  const { error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>

  if (error) return navigate("/login");

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