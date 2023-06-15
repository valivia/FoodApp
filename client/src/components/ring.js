import styles from "./ring.module.css";

const Ring = ({ progress, size = 12 }) => {
  const percentage = progress * 100;

  return (
    <div
      class={styles.indicator}
      style={{
        background: `radial-gradient(closest-side, #292B27 79%, transparent 80% 100%), conic-gradient(#00ff1bff ${percentage}%, #00ffff00 ${percentage}%)`,
        width: `${size}rem`,
        height: `${size}rem`,
      }}
    >
      {percentage}%
    </div>
  );
};



export default Ring;
