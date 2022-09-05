import React from 'react'
import Image from 'next/image'
import logo from '/public/Group 19794.png'
import styles from '/styles/splashscreen.module.css'
export default function SplashScreen()
{
  return (
    <div className={styles.container}>
        <Image className={styles.container} alt='logo' src={logo} />
    </div>
  )
}

