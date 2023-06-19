import styles from './recipe.module.scss';
import { FiExternalLink } from 'react-icons/fi';

const Recipe = ({ recipeName, calories, description }) => {

  return (
    <section className={styles.recipe}>

      <section className={styles.recipeHeader}>
        <section className={styles.textWrapper}>
          <h3>{recipeName}</h3>
          <p>{calories} kcal</p>
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