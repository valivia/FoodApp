import styles from "./goals.module.scss";
import { Goal } from "./goal";

export const Goals = ({ goal, total, progress }) => {
    return (
        <section className={styles.main}>
            <Goal
                name="Calories"
                progress={progress.ENERCC}
                unit="kcal"
                goal={goal.ENERCC}
                total={total.ENERCC}
            />

            <Goal
                name="Protein"
                goal={goal.PROT}
                progress={progress.PROT}
                total={total.PROT}
                color={"var(--protein)"}
            />

            <Goal
                name="Fat"
                goal={goal.FAT}
                progress={progress.FAT}
                total={total.FAT}
                color={"var(--fat)"}
            />

            <Goal
                name="Fiber"
                goal={goal.FIBT}
                progress={progress.FIBT}
                total={total.FIBT}
                color={"var(--fiber)"}
            />
        </section>
    );
}