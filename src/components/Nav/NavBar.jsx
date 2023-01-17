import React from 'react'
import styles from './navbar.module.css'
import { useState, useRef } from 'react'
import DropdownMenu from '../DropdrownMenu/DropdownMenu'
import SmallDropdown from '../DropdrownMenu/SmallDropdown'

export default function NavBar() {
    const [dropdown, setDropdown] = useState(false)
    const dropdownLiOne = useRef(null)
    const [dropdownTwo, setDropdownTwo] = useState(false)
    const [dropdownThree, setDropdownThree] = useState(false)

    const dropdownLiTwo = useRef(null)
    const dropdownLiThree = useRef(null)

    return (
        <>
            <header>
                <div className={styles.covidbanner}>
                    <div className={styles.row}>
                        <h2>COVID-19 Updates</h2>
                        <button>Read More</button>
                        <img src="/img/covid-icon.svg" alt="" />
                        <img className={styles.covidimg4}
                            src="/img/covid-virus-icon-blue.svg" alt="" />
                    </div>
                    <img className={styles.covidimg1}
                        src="/img/covid-icon.svg" alt="" />
                    <img className={styles.covidimg2}
                        src="/img/covid-icon.svg" alt="" />
                    <img className={styles.covidimg3}
                        src="/img/covid-virus-icon-blue.svg" alt="" />
                    <img className={styles.covidimg5}
                        src="/img/covid-virus-icon-blue.svg" alt="" />

                </div>
            </header>
            <header className={styles.stickyheader}>
                <nav>
                    <div className={styles.logo}>
                        <img src="/img/icon.png" />
                        <h3>U-Health</h3>
                    </div>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li
                            ref={dropdownLiOne}
                            onMouseEnter={() => setDropdown(true)}
                        >
                            Services
                            < i class={styles.arrow} ></i>
                            {dropdown && <DropdownMenu
                                liRef={dropdownLiOne}
                                closeDropdown={setDropdown}
                            />}
                        </li>
                        <li>
                            Delivery
                        </li>
                        <li>
                            Pharmacy
                        </li>
                        <li
                            ref={dropdownLiTwo}
                            onMouseEnter={() => setDropdownTwo(true)}
                        >
                            Care Packages
                            <i class={styles.arrow}></i>
                            {dropdownTwo && <SmallDropdown
                                poop={'smalldropdown'}
                                closeDropdown={setDropdownTwo}
                                dropDownItemsArray={smallItemsOne}
                                liRef={dropdownLiTwo}
                            />}
                        </li>
                        <li>
                            Our Team
                        </li>
                        <li
                            ref={dropdownLiThree}
                            onMouseEnter={() => setDropdownThree(true)}
                        >
                            News
                            <i class={styles.arrow}></i>
                            {dropdownThree && <SmallDropdown poop={'smalldropdowntwo'}
                                closeDropdown={setDropdownThree}
                                dropDownItemsArray={smallItemsTwo}
                                liRef={dropdownLiThree} />}

                        </li>
                    </ul>
                    <div className={styles.buttons}>
                        <button>
                            Schedule Appointment
                        </button>
                        <button>
                            Download App
                        </button>
                    </div>
                </nav>
            </header >
        </>
    )
}

const smallItemsOne = [
    { img: 'img/dropdown-icon1.svg', title: 'General Checkup' },
    { img: 'img/dropdown-icon2.svg', title: 'Children' },
    { img: 'img/dropdown-icon3.svg', title: 'Vaccine' },
    { img: 'img/dropdown-icon4.svg', title: 'Obstetrician' },
]
const smallItemsTwo = [
    { img: 'img/dropdown-icon1.svg', title: 'General' },
    { img: 'img/dropdown-icon2.svg', title: 'Children' },
    { img: 'img/dropdown-icon3.svg', title: 'booty' },
    { img: 'img/dropdown-icon4.svg', title: 'Obstetrician' },
]

