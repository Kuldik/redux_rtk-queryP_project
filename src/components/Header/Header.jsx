import React from 'react'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
        <BsFillBookmarkHeartFill/>
    </header>
  )
}
