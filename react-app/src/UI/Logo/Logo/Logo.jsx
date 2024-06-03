import React from 'react';
import styles from './Logo.module.css';
const Logo = () => {
    return (
        <div className={styles.div}>
            <img src={require('../../../img/logo.png')} alt=""/>
            <h1 className={styles.title}>Aviamales</h1>
        </div>
    );
};

export default Logo;