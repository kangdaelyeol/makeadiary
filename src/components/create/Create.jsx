import React, { useRef, useState } from "react";
import styles from "./create.module.css";


const Create = ({ onCreate }) => {
  // bgInfo: Object(fileName: String, fileURL: String)? 
  const [bgInfo, setBgInfo] = useState(false);
  const titleRef = useRef();
  const contextRef = useRef();


  const onSubmit = (e) => {
    e.preventDefault();

  }
  return (<div className={styles.main}>
    <form onSubmit={(event) => onSubmit(event)}>
      <input className={styles.title} type="text" placeholder="title"/>
      <textarea className={styles.context}></textarea>
    </form>
  </div>)
}


export default Create;