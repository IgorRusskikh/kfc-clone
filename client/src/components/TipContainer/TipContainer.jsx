/* eslint-disable react/prop-types */

import { QuestionMark } from "../Svgs/Svgs";
import styles from "./TipContainer.module.css";

export default function TipContainer({ children }) {
  return (
    <div className={styles.tipContainer}>
      {children}
      <button>
        <QuestionMark />
      </button>
    </div>
  );
}
