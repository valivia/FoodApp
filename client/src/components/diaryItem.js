import styles from './diaryItem.module.scss'
import { useMemo } from 'react';
import { combineNutrients } from '../util/recipe';


const DiaryItem = (props) => {
    const { recipe } = props;
    const total = useMemo(() => combineNutrients(recipe.ingredients), [recipe]);

    return (
        <div className={styles.foodContainer}>
            <h3>{recipe.name}</h3>
            <section className={styles.nutrionalValues}>
                <p className={styles.protein}>{0}%</p>
                <p className={styles.fiber}>{0}%</p>
                <p className={styles.fat}>{0}%</p>
            </section>
        </div>
    )
}

export { DiaryItem };