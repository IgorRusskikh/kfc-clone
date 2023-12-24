/* eslint-disable react/prop-types */

import styles from "./TripleLineLogo.module.css";

export default function TripleLineLogo({ height, gap }) {
  return (
    <div className={styles.logoContainer} style={{ gap: gap }}>
      {[0, 1, 2].map((line, index) => (
        <div
          key={index}
          className={styles.logoLine}
          style={{
            height: height,
          }}
        ></div>
      ))}
    </div>
  );
}
