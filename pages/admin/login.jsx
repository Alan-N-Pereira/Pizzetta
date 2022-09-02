import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/Login.module.css'
export default function Login() {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleClick = async ()=>{
    try {
      await axios.post('http://localhost:3000/api/login',{username,password})
      router.push('/admin')
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.head}>Admin Dashboard</h1>
        <input className={styles.input} placeholder='username' onChange={(e)=> setUsername(e.target.value)} />
        <input className={styles.input} placeholder='password' type='password' onChange={(e)=> setPassword(e.target.value)} />
        <button className={styles.button} onClick={handleClick}>Sign In</button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  )
}
