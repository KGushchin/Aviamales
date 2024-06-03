import React from 'react';
import styles from  './Header.module.css';
import Logo from '../../../UI/Logo/Logo/Logo.jsx';
import HistoryButton from "../../../UI/HistoryButton/HistoryButton.jsx";
import OrderLocation from "../components/OrderLocation/OrderLocation/OrderLocation.jsx";
const Header = ({avalFlights,setAvalFlights,setHistory,isHistory, setShop,isShop}) => {
    return (
        <div className={styles.div}>
           <Logo className={styles.logo}></Logo>
            <h2 className={styles.h2}>Поиск дешевых авиабилетов</h2>
            <OrderLocation setAvalFlights={setAvalFlights} avalFlights={avalFlights} setShop={setShop} isShop={isShop} setHistory={setHistory} />
            <HistoryButton text={'История заказов'} setHistory={setHistory} isHistory={isHistory} setShop={setShop} isShop={isShop} setAvalFlights={setAvalFlights} />
        </div>
    );
};

export default Header;