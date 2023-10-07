"use client";

import styles from "./background.module.css";

export default function Background() {
  return (
    <div className={`${styles.main} dark:invert-0`}>
      <div className={styles.content} />
    </div>
  );
}
