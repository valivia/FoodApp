import { useMemo } from 'react';
import { combineNutrients } from '../util/recipe';
import styles from './recipe.module.scss';
import { FiExternalLink } from 'react-icons/fi';

const Recipe = ({ name, description, ingredients, onClick }) => {
  const total = useMemo(() => combineNutrients(ingredients), [ingredients]);

  return (
    <section className={styles.recipe} onClick={onClick}>

      <section className={styles.recipeHeader}>
        <section className={styles.textWrapper}>
          <h3>{name}</h3>
          <p>{total.ENERCC} kcal</p>
        </section>

        <section className={styles.iconWrapper}>
          <FiExternalLink />
        </section>
      </section>

      <div className={styles.line}></div>

      <section className={styles.description}>
        <p>{description}</p>
      </section>

    </section>
  );
};

export { Recipe };