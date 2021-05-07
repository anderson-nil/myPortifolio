import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Inicio from './inicio'

export default function Home() {
  return (
    <div className={styles.container}>
    <Inicio/>
	
    </div>
  )
}
