import React from 'react'
import styles from './locations.module.css'
import { useState } from 'react'
import Modal from './Modal'


export default function Card() {
    const [modal, setModal] = useState(false)

    return (
        <div className={styles.card}
            onClick={() => setModal(true)}
        >
            {modal &&
                <Modal />
            }
            <div className={styles.cardtop}>
                <img src="/img/location-card-1.jpg" alt="" />
            </div>
            <div className={styles.cardbottom}>
                <h3>N Plaza</h3>
                <p>222 Streety St. City 90000</p>
                <br />
                <p>Hours: 8:00 A.M - 6:00 P.M.
                    <br />
                    Monday - Saturday
                </p>
                <small>Available today at 3:00 P.M.</small>
                <div className={styles.button}>
                    <button>Schedule</button>
                    <button>Call</button>
                </div>
            </div>

        </div>
    )
}
