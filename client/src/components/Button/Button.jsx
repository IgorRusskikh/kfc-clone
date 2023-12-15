import styles from "./Button.module.css";

export default (props) => {
  return (
    <button className={styles.redButton}>
      <div
        className={styles.redButtonContent}
        style={{ width: props.width, height: props.height, ...props }}
      >
        <span style={{ fontFamily: "Cera Pro" }}>{props.children}</span>
      </div>
    </button>
  );
};
