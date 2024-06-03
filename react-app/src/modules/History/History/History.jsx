import React from 'react';
import HistoryItem from '../components/HistoryItem/HistoryItem';
import styles from './History.module.css'
const History = ({obj}) => {
    return (
        <div className={styles.div}>
           <h2 className={styles.h2}>История</h2>
            {obj && obj.map((item,index) => <HistoryItem key={index} item={item} />)}
        </div>
    );
};

export default History;