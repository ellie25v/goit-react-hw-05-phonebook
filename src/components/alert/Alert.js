import React from 'react'
import styles from './alert.module.css'

const Alert = () => (
    <div className={styles.alert}>
        <p className={styles.alertP}>This contact already exist!</p>
    </div>
);

export default Alert;