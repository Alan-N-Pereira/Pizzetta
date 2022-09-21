import { useState } from "react"
import styles from '../styles/Add.module.css'
import axios from "axios"
import { useRouter } from "next/router"
export default function Add({setClose}) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.close} onClick={()=>setClose(true)}>X</span>
        <h1>Add a new Pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" />
        </div>
      </div>
    </div>
  )
}
