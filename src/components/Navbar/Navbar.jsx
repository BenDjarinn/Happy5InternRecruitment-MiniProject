import React from 'react'
import styles from '../Navbar/NavbarStyle.module.css'
import logo from '../../assets/happy5.svg'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src={logo}/>
    </nav>
  )
}

export default Navbar