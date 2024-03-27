import React, { useState, useEffect } from "react";
import styles from "./TableRow.module.scss"

export default function TableRow(props) {

    const [valid, setValid] = useState(true)

    const [wordValid, setWordValid] = useState(props.english)
    const [transcriptionValid, setTranscriptionValid] = useState(props.transcription)
    const [translationValid, setTranslationValid] = useState(props.russian)

    const [redWord, setRedWord] = useState(false)
    const [redTranscription, setRedTranscription] = useState(false)
    const [redTranslation, setRedTranslation] = useState(false)

    const [wordError, setWordError] = useState('')
    const [transcriptionError, setTranscriptionError] = useState('')
    const [translationError, setTranslationError] = useState('')

    const handleWordValid = (e) => {
        setWordValid(e.target.value)
    }

    const handleTranscriptionValid = (e) => {
        setTranscriptionValid(e.target.value)
    }


    const handleTranslationValid = (e) => {
        setTranslationValid(e.target.value)
    }


    useEffect(() => {
        if (wordValid.length === 0) {
            setRedWord(true)
        } else {
            setRedWord(false)
        }

        if (transcriptionValid.length === 0) {
            setRedTranscription(true)
        } else {
            setRedTranscription(false)
        }

        if (translationValid.length === 0) {
            setRedTranslation(true)
        } else {
            setRedTranslation(false)
        }

        if (wordValid.length === 0
            || transcriptionValid.length === 0
            || translationValid.length === 0) { setValid(false) }
        else { setValid(true) }
    },
        [transcriptionValid.length, translationValid.length, wordValid.length]
    )

    const [editPressed, setEditPressed] = useState(false);

    const handleEditPress = () => {
        setEditPressed(!editPressed);
    };


    const handleSavePress = () => {

        const regExpWord = /^[a-zA-Z]+(-[a-zA-Z]+)*$/
        const regExpTranscription = /^\[.*\]$/
        const regExpTranslation = /^[а-яА-ЯёЁ]+(-[а-яА-ЯёЁ]+)*$/

        if ((!regExpWord.test(wordValid)) || (!regExpTranscription.test(transcriptionValid)) || (!regExpTranslation.test(translationValid))) {

            (!regExpWord.test(wordValid)) ? setWordError('Поле должно содержать только латинские буквы') : setWordError('');
            (!regExpTranscription.test(transcriptionValid)) ? setTranscriptionError('Поле должно начинаться и заканчиваться квадратными скобками') : setTranscriptionError('');
            (!regExpTranslation.test(translationValid)) ? setTranslationError('Поле должно содержать только русские буквы') : setTranslationError('');

        } else {
            setEditPressed(!editPressed);
            console.log('Данные отправлены на сервер')
        }

    }

    const [deletePressed, setDeletePressed] = useState(false);

    const handleDeletePress = () => {
        setDeletePressed(!deletePressed);
    };

    return (
        <tr>
            <th scope="row">?</th>
            {editPressed ?
                <td>
                    <input type="text" value={wordValid} onChange={(e) => handleWordValid(e)} className={redWord ? styles.red_input : undefined} required />
                    {wordError && <div style={{ color: 'red' }}>{wordError}</div>}
                </td>
                : <td>{props.english}</td>
            }
            {editPressed ?
                <td>
                    <input type="text" value={transcriptionValid} onChange={(e) => handleTranscriptionValid(e)} className={redTranscription ? styles.red_input : undefined} required />
                    {transcriptionError && <div style={{ color: 'red' }}>{transcriptionError}</div>}
                </td>
                : <td>{props.transcription}</td>
            }
            {editPressed ?
                <td>
                    <input type="text" value={translationValid} onChange={(e) => handleTranslationValid(e)} className={redTranslation ? styles.red_input : undefined} required />
                    {translationError && <div style={{ color: 'red' }}>{translationError}</div>}
                </td>
                : <td>{props.russian}</td>
            }
            <td className={styles.table_buttons}>
                {editPressed && <button className={styles.save_button} onClick={handleSavePress} disabled={!valid}><img className={styles.icon} src="https://cdn-icons-png.flaticon.com/512/1280/1280891.png" alt="1" /></button>}
                <button className={styles.change_button} onClick={handleEditPress}><img className={styles.icon} src="https://cdn-icons-png.flaticon.com/512/1046/1046295.png" alt="2" /></button>
                <button className={styles.delete_button} onClick={handleDeletePress}><img className={styles.icon} src="https://cdn-icons-png.flaticon.com/512/4974/4974628.png" alt="3" /></button>
            </td>
        </tr>
    )
}
