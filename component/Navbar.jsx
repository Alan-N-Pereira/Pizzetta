import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useSelector } from 'react-redux'
import Link from 'next/link'
export default function Navbar() {

  const quantity = useSelector(state=>state.cart.quantity)

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width='32' height='32'/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href='/' passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
            <li className={styles.listItem}>Menu</li>
          <Link href='/' passHref>
            <Image src='/img/logo.png' className={styles.logo} alt='' width='100px' height='40px' />
          </Link>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href='/cart' passHref>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src='/img/cart.png' alt='' width='30px' height='30px' />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </div>
  )
}
