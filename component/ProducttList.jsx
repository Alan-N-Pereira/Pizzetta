import Image from 'next/image'
import styles from '../styles/ProductList.module.css'
import PizzaCard from './PizzaCard'

export default function ProducttList() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quos illo, ducimus, quis sapiente dolores cumque quae enim inventore aliquam natus? Consectetur voluptatibus odio fuga eius inventore illo soluta iure.</p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
    </div>
  )
}
