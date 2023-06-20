import styles from './food.module.scss'


const Food = ({ name, protein, fiber, fat }) => {
    return (
        <div className={styles.foodContainer}>
            <h3>{name}</h3>
            <section className={styles.nutrionalValues}>
                <p className={styles.protein}>{protein}%</p>
                <p className={styles.fiber}>{fiber}%</p>
                <p className={styles.fat}>{fat}%</p>
            </section>
        </div>
    )
}

export { Food };