import React from 'react'
import styles from './locations.module.css'
import Card from './Card'

export default function LocationsCards() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.h1}>Loctations: </h1>
                <div className={styles.cardscontainer}>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

/* const cardContents = [
    
] */
