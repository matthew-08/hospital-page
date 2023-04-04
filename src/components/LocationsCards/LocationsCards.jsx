import React from 'react'
import styles from './locations.module.css'
import Card from './Card'
import { useState } from 'react'

export default function LocationsCards() {
    const [modal, setModal] = useState(null)
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.h1}>Locations: </h1>
                <div className={styles.cardscontainer}>
                    <Card
                        id={1}
                        onClick={(e) => console.log("hello")}
                    />
                    <Card
                        id={2}
                    />
                    <Card
                        id={2}
                    />
                </div>
            </div>
        </>
    )
}

/* const cardContents = [
    
] */
