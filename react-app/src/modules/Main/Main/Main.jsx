import React from 'react';
import Order from "../components/Order/Order";
import styles from './Main.module.css'
const Main = ({avalFlights,currentFlight,setCurrentFlight, setBuy}) => {
    console.log(avalFlights);
    return (
        <div className={styles.div}>
            <h1>Рейсы</h1>
            {avalFlights.map((flight, index) => (
                <Order
                    object={flight}
                    key={index}
                    currentFlight={currentFlight}
                    setCurrentFlight={setCurrentFlight}
                    setBuy={setBuy}
                />
            ))}
        </div>
    );
};

export default Main;