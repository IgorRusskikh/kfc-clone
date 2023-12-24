import NewsImages from "./NewsImages";
import styles from "./NewsBlock.module.css";

export default function NewsBlock() {
  return (
    <div className={styles.pageContent}>
      <div className={styles.newsContainer}>
        <NewsImages />
        <div className={styles.arrowsContainer}></div>
      </div>
    </div>
  );
}
