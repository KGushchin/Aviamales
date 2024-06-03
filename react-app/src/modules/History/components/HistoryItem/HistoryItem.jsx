import React from 'react';
import styles from './HistoryItem.module.css'
const HistoryItem = ({item, key}) => {
    return (
        <div className={styles.div}>
          <h2 className={styles.geo}>{item.from} -> {item.to}</h2>
            <h2 className={styles.day}>{item.day}.6.2024</h2>
            <h2 className={styles.time}>{item.time}</h2>
            <h2 className={styles.roadTime}>{item.roadTime}</h2>
            <h2 className={styles.place}>место {item.places}</h2>
            <h2 className={styles.price}>Стоимость {item.price}р</h2>

        </div>
    );
};

export default HistoryItem;