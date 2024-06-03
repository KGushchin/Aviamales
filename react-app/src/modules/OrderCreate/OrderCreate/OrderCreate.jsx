import React from 'react';
import UserData from "../components/userData/userData.jsx";
import DataTicket from "../components/dataTicket/dataTicket.jsx";
import buyTicket from "../components/buyTicket/buyTicket/buyTicket.jsx";
import styles from "./OrderCreate.module.css"
import BuyTicket from "../components/buyTicket/buyTicket/buyTicket.jsx";
const OrderCreate = ({currentFlight, saveTicket, place, setPlace, deletePlace, setHistory, isHistory, setBuy}) => {
    return (
        <div className={styles.orderCreate}>
            <h2 className={styles.h2}>Заказ</h2>
            <DataTicket currentFlight={currentFlight} />
            <UserData place={place} setPlace={setPlace} deletePlace={deletePlace} currentFlight={currentFlight} />
            <BuyTicket
                saveTicket={saveTicket}
                currentFlight={currentFlight}
                deletePlace={deletePlace}
                setHistory={setHistory}
                isHistory={isHistory}
                setBuy={setBuy}
            />
        </div>
    );
};

export default OrderCreate;