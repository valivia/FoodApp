import styles from "./dial.module.scss";

const Dial = ({ progress, size = 12 }) => {
  const percentage = (progress * 100).toFixed(1);

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
        style={{ background: `conic-gradient(var(--accent) ${percentage}%, #ffffff00 ${percentage}%)` }}
      >

      </div>
      {percentage}%
    </div >
  );
};



export { Dial };
