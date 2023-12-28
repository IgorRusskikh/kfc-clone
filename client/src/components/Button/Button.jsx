/* eslint-disable react/prop-types */

import styles from "./Button.module.css";

export default function Button({ btnStyles, onClick, ...props }) {
  return (
    <button
      style={{ ...btnStyles }}
      className={styles.redButton}
      onClick={onClick}
    >
      <div
        className={styles.redButtonContent}
        style={{ width: props.width, height: props.height, ...props.style }}
      >
        <span style={{ fontFamily: "Cera Pro" }}>{props.children}</span>
      </div>
    </button>
  );
}
