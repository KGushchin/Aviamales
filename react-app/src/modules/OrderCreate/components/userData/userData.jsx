import React from 'react';
import styles from './userData.module.css';
const UserData = ({place,setPlace,currentFlight,deletePlace}) => {
    const changePlace = function(e) {
        setPlace(Number(e.target.value));
    }
    return (
        <div className={styles.container}>
            <input type="text" placeholder={'Имя'} className={styles.inputn}/>
            <input type="text" placeholder={'Фамилия'} className={styles.inputf}/>
            <input type="text" placeholder={'Отчество'} className={styles.inputo}/>
            <input type="text" placeholder={'Серия паспорта'} className={styles.inputs}/>
            <input type="text" placeholder={'Номер паспорта'} className={styles.inputnu}/>
            <input type="number" placeholder={'Место'} className={styles.inputp} onChange={changePlace}/>
        </div>
    );
};

export default UserData;