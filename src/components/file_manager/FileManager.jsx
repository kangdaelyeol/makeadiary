import React, { useState } from "react";
import styles from "./file_manager.module.css";

const FileManager = ({fileName}) => {
  const [isLoading, setLoading] = useState(false);
  const fileClick = () => {
    // the File Input element is hidden.
    // so, to activate File Input Element,
    // you have to link the Main element with File Input element
    // and set up a click Event for the Main Element.

  }
 const fileInput = () => {
   // if the User input a Img file to change background
   // The Loading Spin is displayed while the Img file is being processed by the Clodinary API
   // After everything is done, the fileName is displayed instead the Loading Spin
   // and the FIleName object is become new value by calling 'setState' function
 }

  return (
    <div onClick={fileClick} className={styles.main}>
      <input onInput={fileInput} type="file" className={styles.fileInput} />
      {isLoading 
      ? <div className={styles.loadingComp}>
        <div className={styles.spinner}> </div>
      </div>
      : <div className={styles.fileComp}>
        <span className={styles.fileName}>{fileName || "No File"}</span>
      </div> }
    </div>
  )

}

export default FileManager;