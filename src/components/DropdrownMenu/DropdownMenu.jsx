import React from 'react'
import styles from './dropdown.module.css'
import MenuOption from './MenuOption'
import { useRef, useEffect } from 'react'

const menu = [
    { img: 'img/dropdown-icon1.svg', title: 'General Checkup' },
    { img: 'img/dropdown-icon2.svg', title: 'Children' },
    { img: 'img/dropdown-icon3.svg', title: 'Vaccine' },
    { img: 'img/dropdown-icon4.svg', title: 'Obstetrician' },
    { img: 'img/dropdown-icon5.svg', title: 'Women\'s Health' },
    { img: 'img/dropdown-icon6.svg', title: 'Dentist' },

]

export default function DropdownMenu({ closeDropdown, liRef }) {
    const dropdown = useRef(null)

    useEffect(() => {
        document.body.addEventListener('mouseover', checkForDropdown)
        return () => document.body.removeEventListener('mouseover', checkForDropdown)
    }, [])

    const checkForDropdown = (e) => {
        const element = e.target
        if (element === liRef.current) {
            return
        }
        if (dropdown.current && !dropdown.current.contains(element)) {
            return closeDropdown(false)
        }
    }

    return (
        <div
            ref={dropdown}
            className={styles.dropdowncontainer}>
            <div className={styles.dropdownleft}>
                <div className={styles.dropdowntop}>
                    <p className={styles.homeafter}>Home Services</p>
                    <button>View all services</button>
                </div>
                <div className={styles.optionscontainer}>
                    {menu.map(item => {
                        return <MenuOption img={item.img} title={item.title} />
                    })}
                </div>
            </div>
            <div className={styles.dropdownright}>
                <div className={styles.dropdowntop}>
                    <p className={styles.remoteafter}>Remote Services</p>
                    <button>View all services</button>
                </div>
                <div className={styles.optionscontainer}>
                    {menu.map(item => {
                        return <MenuOption img={item.img} title={item.title} />
                    })}
                </div>
            </div>
        </div>
    )
}
