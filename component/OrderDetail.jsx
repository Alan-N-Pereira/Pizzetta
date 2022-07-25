import styles from '../styles/OrderDetail.module.css'
export default function OrderDetail() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>You will pay $12 after delivery.</h1>
            <div className={styles.item}>
                <label className={styles.label}>Name Surname</label>
                <input type="text" placeholder='John Doe' className={styles.input}/>
            </div>
        </div>
    </div>
  )
}
