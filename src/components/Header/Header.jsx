import React from "react";
import { Link } from "react-router-dom"
import styles from "./header.module.scss"
import Search from "../Search/Search";
import Login from "../Login/Login";
import SignUp from "../Signup/Signup";

function Header() {
    return (
        <header className={styles.header}>
            < Link to="/flash-a-card"><h1 className={styles.appName}>Flash-a-card</h1></Link>
            <nav>
                <a className={styles.main_link} href="/flash-a-card/cards">Cards</a>
                <a className={styles.main_link} href="/flash-a-card">Dictionary</a>
            </nav>
            <div className={styles.actions}>
                <Search />
                <Login />
                <SignUp />
            </div>
        </header>
    )
}

export default Header;