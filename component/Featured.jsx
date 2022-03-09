import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Featured.module.css';
export default function Featured() {
    const [index,setIndex] = useState(0)
    const images =[
        '/img/featured.jpg',
        '/img/featured2.png',
        // '/img/featured3.png',
    ]

    const handleArrow = (direction)=>{
        if(direction === 'l'){
            setIndex(index!==0 ? index-1: images.length-1)
        }
        if(direction === 'r'){
            setIndex(index!==(images.length-1) ? index+1: 0 )
            
        }
    }
    
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:0}}>
            <Image src='/img/arrowl.png' alt='' layout='fill' onClick={()=>handleArrow('l')}/>
        </div>
        <div className={styles.wrapper}>
            {images.map((img, i )=> (
                <div className={styles.imgContainer} key={i} style={{transform:`translateX(${-100*index}vw)`}}>
                        <Image src={img} alt='' layout='fill' objectFit='contain'/>
                </div>
            ))}
        </div>
        <div className={styles.arrowContainer} style={{right:0}}>
            <Image src='/img/arrowr.png' alt='' layout='fill' onClick={()=>handleArrow('r')}/>
        </div>
    </div>
  )
}
