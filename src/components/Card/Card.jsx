import React, { useState, useEffect, useRef } from "react";
import styles from "./card.module.scss"

export default function Card(props) {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(true);
    };

    const buttonRef = useRef(null);

    useEffect(() => {
        buttonRef.current.focus();
    }, [])

    return (
        <div className={styles.card} >
            <div className={styles.word}>{props.word}</div>
            <div className={styles.transcription}>{props.transcription}</div>
            {checked
                ? <div className={styles.translation}>{props.translation}</div>
                : <button ref={buttonRef} onClick={() => { handleChange(); props.countCards() }} className={styles.check_button}>Проверить</button>
            }
        </div >
    )
}