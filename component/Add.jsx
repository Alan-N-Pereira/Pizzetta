import { useState } from "react"
import styles from '../styles/Add.module.css'
import axios from "axios"
import { useRouter } from "next/router"
export default function Add({setClose}) {
  const [file,setFile] = useState(null)
  const [title,setTitle] = useState(null)
  const [desc,setDesc] = useState(null)
  const [prices,setPrices] = useState([])
  const [extra,setExtra] = useState(null)
  const [extraOptions,setExtraOptions] = useState([])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.close} onClick={()=>setClose(true)}>X</span>
        <h1>Add a new Pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input className={styles.input} type="text" onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea rows={4} type="text" onChange={(e)=>setDesc(e.target.value)} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <input className={`${styles.input} ${styles.inputS}`} type='number' placeholder="Small" onChange={(e)=>changePrice(e,0)} />
          <input className={`${styles.input} ${styles.inputS}`} type='number' placeholder="Medium" onChange={(e)=>changePrice(e,1)} />
          <input className={`${styles.input} ${styles.inputS}`} type='number' placeholder="Large" onChange={(e)=>changePrice(e,2)} />
        </div>
      </div>
    </div>
  )
}
