import React, { useState } from "react";
import styles from "./card.module.scss"

export default function Card(props) {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(true);
    };

    return (
        <div className={styles.card} >
            <div className={styles.word}>{props.word}</div>
            <div className={styles.transcription}>{props.transcription}</div>
            {checked
                ? <div className={styles.translation}>{props.translation}</div>
                : <button onClick={handleChange} className={styles.check_button}>Проверить</button>
            }
        </div >
    )
    }