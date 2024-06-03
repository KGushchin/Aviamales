import React from 'react';
import styles from './HistoryButton.module.css';
const HistoryButton = ({text, setHistory, isHistory, setShop, isShop}) => {
    const handleSubmit = function () {
        isHistory == false ? setHistory(true): setHistory(false);
    }
    return (
        <div className={styles.div} onClick={handleSubmit}>
          <h1>{text}</h1>
        </div>
    );
};

export default HistoryButton;