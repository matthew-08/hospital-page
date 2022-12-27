import React from 'react'
import styles from './moreswiper.module.css'

export default function SwiperCard({ title }) {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>

        </div>
    )
}

