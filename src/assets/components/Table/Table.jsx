import React, { useState } from "react";
import styles from "./Table.module.scss"


function Table() {

    const tableWords = [
        { id: "15236", english: "fawn", transcription: "[fɔːn]", russian: "оленёнок", tags: "animals", tags_json: "[\"animals\"]" },
        { id: "15237", english: "travel", transcription: "[ˈtrævl]", russian: "путешествовать", tags: "travelling", tags_json: "[\"travelling\"]" },
        { id: "15248", english: "despair", transcription: "[dɪˈspeə]", russian: "отчаяние", tags: "emotions", tags_json: "[\"emotions\"]" },
        { id: "15266", english: "423", transcription: "423423", russian: "423423", tags: "", tags_json: "[]" }
    ];

    const [editPressed, setEditPressed] = useState(false);

    const handleEditPress = () => {
        setEditPressed(!editPressed);
    };


    const handleSavePress = () => {
        setEditPressed(!editPressed);
    };

    const [deletePressed, setDeletePressed] = useState(false);

    const handleDeletePress = () => {
        setDeletePressed(!deletePressed);
    };

    return (
        <div className={styles.container}>
            <h4 className={styles.table_name}>Список слов</h4>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Слово</th>
                        <th scope="col">Транскрипция</th>
                        <th scope="col">Перевод</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {tableWords.map((word) => {
                        return (
                            <tr>
                                <th scope="row">?</th>
                                {editPressed ? <td><input type="text" value={word.english} /></td> : <td>{word.english}</td>}
                                {editPressed ? <td><input type="text" value={word.transcription} /></td> : <td>{word.transcription}</td>}
                                {editPressed ? <td><input type="text" value={word.russian} /></td> : <td>{word.russian}</td>}
                                <td className={styles.table_buttons}>
                                    {editPressed && <button className={styles.save_button} onClick={handleSavePress}><img className={styles.icon} src="https://cdn-icons-png.flaticon.com/512/1280/1280891.png" alt="1" /></button>}
                                    <button className={styles.change_button} onClick={handleEditPress}><img className={styles.icon} src="https://cdn-icons-png.flaticon.com/512/1046/1046295.png" alt="2" /></button>
                                    <button className={styles.delete_button} onClick={handleDeletePress}><img className={styles.icon} src="https://cdn-icons-png.flaticon.com/512/4974/4974628.png" alt="3" /></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;