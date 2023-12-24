import styles from "./NewsBlock.module.css";

export default function NewsImages() {
  return (
    <div className={styles.newsImages}>
      <div className={styles.leftNewsImages}>
        <a
          className={styles.newsImage}
          href="#"
          style={{
            backgroundImage:
              "url(https://s82079.cdn.ngenix.net/625x480/e3djulkl3iq29noq507vb91228za)",
          }}
        ></a>
      </div>
      <div className={styles.rightNewsImages}>
        <a
          className={styles.newsImage}
          href="#"
          style={{
            backgroundImage:
              "url(https://s82079.cdn.ngenix.net/625x480/dfce6dtuhvj0g4iq5ddmmuumiwgj)",
          }}
        ></a>
      </div>
    </div>
  );
}
