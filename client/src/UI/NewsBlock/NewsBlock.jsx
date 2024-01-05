// import NewsImages from "./NewsImages";

import { Suspense, lazy } from "react";

import styles from "./NewsBlock.module.css";

export default function NewsBlock() {
  const NewsImages = lazy(() => import("./NewsImages"));

  return (
    <div className={styles.pageContent}>
      <div className={styles.newsContainer}>
        <Suspense>
          <NewsImages />
        </Suspense>
        <div className={styles.arrowsContainer}></div>
      </div>
    </div>
  );
}
