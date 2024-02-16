import React, { useState } from "react";
import Card from "../Card/card";
import styles from "./cardCarousel.module.scss"

export default function CardCarousel() {

    const words = [
        { id: "15236", english: "fawn", transcription: "[fɔːn]", russian: "оленёнок", tags: "animals", tags_json: "[\"animals\"]" },
        { id: "15237", english: "travel", transcription: "[ˈtrævl]", russian: "путешествовать", tags: "travelling", tags_json: "[\"travelling\"]" },
        { id: "15248", english: "despair", transcription: "[dɪˈspeə]", russian: "отчаяние", tags: "emotions", tags_json: "[\"emotions\"]" },
        { id: "15266", english: "423", transcription: "423423", russian: "423423", tags: "", tags_json: "[]" }
    ];

    let [cardIndex, setCardIndex] = useState(0);

    const maxIndex = words.length - 1;

    const previous = () => { (cardIndex === 0) ? setCardIndex(maxIndex) : setCardIndex(cardIndex - 1); }

    const next = () => { (cardIndex < maxIndex) ? setCardIndex(cardIndex + 1) : setCardIndex(0) }

    return (
        <div className={styles.carousel}>
            <button className={styles.carousel_button} onClick={previous}>Назад</button>
            <Card key={cardIndex} word={words[cardIndex].english}
                transcription={words[cardIndex].transcription}
                translation={words[cardIndex].russian} />
            <button className={styles.carousel_button} onClick={next}>Вперед</button>
        </div>
    )
}