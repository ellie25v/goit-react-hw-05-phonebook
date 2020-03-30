import React from 'react';
import styles from './filter.module.css'

const Filter = ({filter}) => (
    <div className={styles.filter}>
    <p className={styles.filterP}>Find contact by name</p>
    <input className={styles.filterInput} onChange={filter}
    type="text"
    name="filter"/>
    </div>
);

export default Filter;