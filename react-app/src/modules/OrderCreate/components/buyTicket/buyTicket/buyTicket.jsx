import React from 'react';
import styles from './buyTicket.module.css'
const BuyTicket = ({saveTicket, currentFlight, deletePlace, isHistory, setHistory, setBuy}) => {
    const set =  function() {
        isHistory = false ? setHistory(true) : setHistory(true)
        setBuy(false);
    }
    return (
        <div className={styles.div} onClick={() => {saveTicket(currentFlight); deletePlace(currentFlight); set()}}>
           <h2 className={styles.h2}>Купить билет</h2>
        </div>
    );
};

export default BuyTicket;