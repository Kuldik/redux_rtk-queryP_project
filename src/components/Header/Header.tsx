import React from 'react'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'
import styles from './Header.module.css'
import { useFavorites } from '../../hooks/useFavorites'
export const Header = () => {
    const {favorites} = useFavorites()
  return (
    <header className={styles.header}>
        <BsFillBookmarkHeartFill/>
        <span>{favorites.length}</span>
    </header>
  )
}
