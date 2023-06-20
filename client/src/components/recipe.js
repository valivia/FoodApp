import { useMemo } from 'react';
import { combineNutrients } from '../util/recipe';
import styles from './recipe.module.scss';

const Recipe = ({ name, description, ingredients, onClick }) => {
  const total = useMemo(() => combineNutrients(ingredients), [ingredients]);

  return (
    <article className={styles.main} onClick={onClick}>

      <section className={styles.header}>
        <h3>{name}</h3>
        <p>{total.grams}g</p>
      </section>

      <p className={styles.description}>
        {description}
      </p>

      <section className={styles.nutrients}>
        <div>
          <p>Calories</p>
          <p>{total.ENERCC}kcal</p>
        </div>
        <div>
          <p>Protein</p>
          <p>{total.PROT}g</p>
        </div>
        <div>
          <p>Carbs</p>
          <p>{total.CHO}g</p>
        </div>
        <div>
          <p>Fat</p>
          <p>{total.FAT}g</p>
        </div>
      </section>

    </article>
  );
};

export { Recipe };