import styles from './recipe.module.css';
import { CiExport } from 'react-icons/ci';

const Recipe = ({recipeName, calories, description}) => {
    
    return (
        <section className={styles.recipe}>
          <section className={styles.recipeHeader}>
            <section className={styles.textWrapper}>
              <h3>{recipeName}</h3>
              <p>{calories} kcal</p>
            </section>
            <section className={styles.iconWrapper}>
                <CiExport/>
            </section>
          </section>
          
          <section className={styles.lineWrapper}>
            <div className={styles.line}></div>
          </section>

          <section className={styles.description}>
            <p>{description}</p>
          </section>
        </section>
    );
};

export { Recipe };