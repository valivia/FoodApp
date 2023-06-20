import { nutrientMap } from "../../util/nutrients";
import styles from "./table.module.scss";
import { interpolateColor } from "../../util/rgb";


const Table = ({ total, goal }) => {

  const rows = Object.entries(nutrientMap).map(([key, value]) => {
    const current = total[key];
    const target = goal[key];
    const progress = (current - target) / (0 - target);
    const backgroundColor = interpolateColor("#68DD7A", "#d17373", progress);

    return (
      <tr key={key}>
        <td className={styles.indicator} style={{ backgroundColor }}></td>
        <td>{value.name}</td>
        <td>{Math.round(current)}{value.unit}</td>
        <td>{Math.round(target)}{value.unit}</td>
      </tr>
    );
  });


  return (
    <section className={styles.main}>
      <table className={styles.table}>

        <thead>
          <tr>
            <th></th>
            <th>Nutrient</th>
            <th>Total</th>
            <th>Goal</th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </table>
    </section>
  );
};



export { Table };
