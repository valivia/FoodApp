import styles from "./dailyGoal.module.scss";
import { Dial } from "./dial";

const DailyGoal = ({ progress }) => {


    return (
        <section className={styles.main}>
            <section className={styles.info}>
                <h1 className={styles.title}>Daily Goal</h1>
                <p>Kcal</p>
            </section>
            <Dial progress={progress} size={8} />
        </section>
    );
};



export { DailyGoal };
