import styles from "./goal.module.scss";
import { Dial } from "./dial";

const Goal = ({ name, progress, total, goal, color, unit = "g" }) => {
    return (
        <article className={styles.main}>
            <Dial progress={progress} size={5} color={color} />
            <h3 className={styles.name}>{name}</h3>
            {/* <p className={styles.detail}>{total}/{goal}{unit}</p> */}
        </article>
    );
};



export { Goal };
