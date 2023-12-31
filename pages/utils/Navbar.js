import React from 'react'
import {FaCoins} from 'react-icons/fa'
import styles from "../../styles/Styles.module.css";

const Navbar = () => {
    return (
            <div className={styles.navbar}>
                <FaCoins className={styles.icon} />
                <h1> Coin <span className={styles.purple}>List</span></h1>
            </div>
    )
}

export default Navbar