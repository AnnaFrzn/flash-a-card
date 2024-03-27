import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./cardCarousel.module.scss"
import { words } from "../../data/Words";

export default function CardCarousel() {

    let [cardIndex, setCardIndex] = useState(0);

    const maxIndex = words.length - 1;

    const previous = () => { (cardIndex === 0) ? setCardIndex(maxIndex) : setCardIndex(cardIndex - 1); }

    const next = () => { (cardIndex < maxIndex) ? setCardIndex(cardIndex + 1) : setCardIndex(0) }

    let [count, setCount] = useState(0)

    const countCards = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <div className={styles.cards_studied}>Изучено карточек: {count}</div>
            <div className={styles.carousel}>
                <button className={styles.carousel_button} onClick={previous}>Назад</button>
                <Card key={cardIndex} word={words[cardIndex].english}
                    transcription={words[cardIndex].transcription}
                    translation={words[cardIndex].russian}
                    countCards={countCards}
                />
                <button className={styles.carousel_button} onClick={next}>Вперед</button>
            </div>
        </div>
    )
}