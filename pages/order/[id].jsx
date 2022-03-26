import Image from 'next/image'
import styles from '../../styles/Order.module.css'

export default function Order() {
  return (
    <div className={styles.container}>

        <div className={styles.left}>
            <div className={styles.row}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            <span className={styles.id}>12345678</span>
                        </td>
                        <td className={styles.td}>
                            <span className={styles.name}>John Doe</span>
                        </td>
                        <td className={styles.td}>
                            <span className={styles.address}>Elton st. 212-33 LA</span>
                        </td >
                        <td className={styles.td}>
                            <span className={styles.total}>$39.80</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.row}></div>
        </div>

        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal</b>$79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total</b>$79.60
                </div>
                <button disabled className={styles.button}>PAID</button>
            </div>
        </div>
        
    </div>
  )
}
