import React from "react";
import TableRow from "../TableRow/TableRow";
import styles from "./Table.module.scss"
import { words } from "../../data/Words";


function Table() {

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
                    {words.map((word) =>
                        <TableRow english={word.english}
                            transcription={word.transcription}
                            russian={word.russian} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;