import React from 'react'
import styles from './insurance.module.css'

export default function InsuranceCard({ name }) {
    return (
        <div className={styles.card}>
            <h3>
                {name}
            </h3>
        </div>
    )
}
