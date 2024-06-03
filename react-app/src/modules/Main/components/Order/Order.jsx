import React from 'react';
import styles from './Order.module.css';
const Order = ({object, currentFlight, setCurrentFlight,setBuy}) => {
    const handleChange = function() {
        setCurrentFlight(object);
        console.log(currentFlight);
        setBuy(true);
    }
    return (
        <div className={styles.div}>
        <h1 className={styles.company}>{object.company}</h1>
            <h2 className={styles.loc}>{object.from} -><br/>{object.to}</h2>
            <h2 className={styles.time}>{object.time}</h2>
            <h2 className={styles.road}>{object.roadTime}</h2>
            <h2 className={styles.cost}>Стоимость: {object.price}Р</h2>
            <h2>Места: {object.places.join(', ')}</h2>
            <button className={styles.buy} onClick={handleChange}>Купить</button>

        </div>
    );
};

export default Order;