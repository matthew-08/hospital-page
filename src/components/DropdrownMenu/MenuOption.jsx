import React from 'react'
import styles from './dropdown.module.css'


export default function MenuOption({ img, title }) {
    return (
        <div className={styles.menuoption}>
            <div className={styles.imgcont}>
                <img src={`${img}`} />
            </div>
            <span>{title}</span>
        </div>
    )
}
