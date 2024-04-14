import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
            <a href="https://www.uniword.ir/">Uniword</a> | Your Digital Partner
        </p>
    </div>
  )
}

export default Header