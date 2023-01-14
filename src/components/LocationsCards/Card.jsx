import React from 'react'
import styles from './locations.module.css'


export default function Card() {
    return (
        <div className={styles.card}>
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
