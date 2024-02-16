import React from "react";
import styles from "./header.module.scss"
import Search from "../Search/search";
import Login from "../Login/login";
import SignUp from "../Signup/signup";

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.appName}>Flash-a-card</h1>
            <nav>
                <a className={styles.main_link} href="/">Cards</a>
                <a className={styles.main_link} href="/dictionary">Dictionary</a>
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