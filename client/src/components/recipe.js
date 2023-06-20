import { useMemo } from 'react';
import { combineNutrients } from '../util/recipe';
import styles from './recipe.module.scss';

const Recipe = ({ name, description, ingredients, onClick, displayIngredients = true, displayNutrients = true }) => {
  const total = useMemo(() => combineNutrients(ingredients), [ingredients]);
  console.log(ingredients);

  return (
    <article className={styles.main} onClick={onClick}>

      <section className={styles.header}>
        <h3>{name}</h3>
        <p>{total.grams}g</p>
      </section>

      <p className={styles.description}>
        {description}
      </p>

      {displayNutrients &&
        <section className={styles.nutrients}>
          <h4>Nutrients</h4>
          <ul>
            <li>
              <p>Calories</p>
              <p>{total.ENERCC}kcal</p>
            </li>
            <li>
              <p>Protein</p>
              <p>{total.PROT}g</p>
            </li>
            <li>
              <p>Carbs</p>
              <p>{total.CHO}g</p>
            </li>
            <li>
              <p>Fat</p>
              <p>{total.FAT}g</p>
            </li>
          </ul>
        </section>
      }

      {displayIngredients &&
        <section className={styles.ingredients}>
          <h4>Ingredients</h4>
          <ul>
            {ingredients.map((ingredient, i) => (
              <li key={i}>
                <p>{ingredient.ingredient.name} </p>
                <p>({ingredient.quantity}g)</p>
              </li>
            ))}
          </ul>
        </section>
      }

    </article>
  );
};

export { Recipe };