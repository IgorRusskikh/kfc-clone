import styles from "./TripleLineLogo.module.css";

export default ({ height, gap }) => {
  return (
    <div className={styles.logoContainer} style={{ gap: gap }}>
      {[0, 0, 0].map((line) => (
        <div
          className={styles.logoLine}
          style={{
            height: height,
          }}
        ></div>
      ))}
    </div>
  );
};
