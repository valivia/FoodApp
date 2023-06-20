import styles from "./dial.module.scss";

const Dial = ({ progress, value, color = "var(--accent)", size = 12 }) => {
  const percentage = Math.round(progress * 100)

  return (
    <div
      className={styles.main}
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
      }}
    >
      <div
        className={styles.indicator}
        style={{ background: `conic-gradient(${color} ${percentage}%, #ffffff00 ${percentage}%)` }}
      >
      </div>


      <p>{percentage}%</p>
      {value && <p className={styles.total}>{value}</p>}
    </div >
  );
};



export { Dial };
