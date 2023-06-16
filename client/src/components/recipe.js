import styles from './recipe.module.css';

const Recipe = ({recipeName, calories, description}) => {
    
    return (
        <section className={styles.recipe}>
          <section className={styles.recipeHeader}>
            <section className={styles.textWrapper}>
              <h3>{recipeName}</h3>
              <p>{calories} kcal</p>
            </section>
            <section className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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

export {Recipe}