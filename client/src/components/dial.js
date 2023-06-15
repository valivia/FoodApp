import styles from "./dial.module.css";

const Dial = ({ progress, size = 12 }) => {
  const percentage = progress * 100;

  return (
    <div
      class={styles.indicator}
      style={{
        background: `radial-gradient(closest-side, #292B27 79%, transparent 80% 100%), conic-gradient(var(--accent) ${percentage}%, #ffffff00 ${percentage}%)`,
        width: `${size}rem`,
        height: `${size}rem`,
      }}
    >
      {percentage}%
    </div>
  );
};



export { Dial };
