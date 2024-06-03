import React from 'react';
import {useState} from "react";
import styles from './InputCity.module.css'
const InputCity = ({setFrom, setTo}) => {
    const setCity = function(e) {
        if (setFrom) {
            setFrom(e.target.value.toString())
        } else {
            setTo(e.target.value.toString())
        }
    }
    return (
        <div className={styles.div}>
            <select id="cities" onChange={setCity}>
                <option value=""></option>
                <option value="Москва">Москва</option>
                <option value="Анапа">Анапа</option>
                <option value="Омск">Омск</option>
                <option value="Владивосток">Владивосток</option>
            </select>
        </div>
    );
};

export default InputCity;