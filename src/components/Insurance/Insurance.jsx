import React from 'react'
import styles from './insurance.module.css'
import InsuranceCard from './InsuranceCard'


export default function Insurance() {
    return (
        <div className={styles.insurancecont}>
            <h2>Insurance</h2>
            <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia explicabo possimus molestias, dicta laboriosam. Minus, fugit quisquam! Ratione, assumenda!</small>
            <div className={styles.grid}>
                {insuranceCompanies.map((item, index) => <InsuranceCard name={item} />)}
            </div>
        </div>
    )
}


const insuranceCompanies = [
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",
    "Insurance",

]