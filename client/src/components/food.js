import styles from '../components/food.module.css'


const Food = ({foodName, protein, fiber, fat}) => {
    return (
        <div className={styles.foodContainer}>
            <h3>{foodName}</h3>
            <section className={styles.nutrionalValues}>
            <p className={styles.protein}>{protein}%</p>
            <p className={styles.fiber}>{fiber}%</p>
            <p className={styles.fat}>{fat}%</p>
            </section>
        </div>
    )
}

export { Food };