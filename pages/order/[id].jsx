import Image from 'next/image'
import styles from '../../styles/Order.module.css'

export default function Order() {
    const status = 0
    const statusClass = (index) =>{
        if(index-status < 1) return styles.done
        if(index-status === 1) return styles.inProgress
        if(index-status > 1) return styles.notDone
    }
  return (
    <div className={styles.container}>

        <div className={styles.left}>
            <div className={styles.row}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
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
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src='/img/paid.png' alt='' width={30} height={30} />
                    <span>Payment</span>
                    <div className={styles.checkedIcon}><Image src='/img/checked.png' alt='' width={20} height={20} /></div>
                </div>
                <div className={statusClass(1)}>
                    <Image src='/img/bake.png' alt='' width={30} height={30} />
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}><Image src='/img/checked.png' alt='' width={20} height={20} /></div>
                </div>
                <div className={statusClass(2)}>
                    <Image src='/img/bike.png' alt='' width={30} height={30} />
                    <span>On the way</span>
                    <div className={styles.checkedIcon}><Image src='/img/checked.png' alt='' width={20} height={20} /></div>
                </div>
                <div className={statusClass(3)}>
                    <Image src='/img/delivered.png' alt='' width={30} height={30} />
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}><Image src='/img/checked.png' alt='' width={20} height={20} /></div>
                </div>
            </div>
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

export async function getIdOrder(params) {
	const response = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
	return response;
}

export const getServerSideProps = async ({ params }) => {
	const res = await getIdOrder(params);
	return {
		props: {
			order: res.data
		}
	};
};