import React from 'react'
import MenuOption from './MenuOption'
import styles from './dropdown.module.css'
import { useRef, useEffect } from 'react'
/* 
export default function SmallDropdown({ dropDownItemsArray, liRef, closeDropdown, poop }) {
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
            className={`${styles.dropdowncontainer} ${styles[poop]}`}>
            {dropDownItemsArray.map(item =>
                <MenuOption
                    img={item.img}
                    title={item.title}
                />)}
        </div>
    )
}
 */