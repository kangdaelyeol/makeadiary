import React from "react";
import styles from "./diary.module.css";

const Diary = ({ id, title, createAt, background}) => {
  return (<div className={styles.main}>
    <div className={styles.wrapper}>
      <img alt="backgroundImg" className={styles.background} src={background || ""}/>
      <div className={styles.top}>
        <h1 className={styles.title}>
          {title}
        </h1>
      </div>
      <div className={styles.bottom}>
        <span className={styles.createAt}>
          {createAt}
        </span>
      </div>
    </div>
  </div>)
}

export default Diary;