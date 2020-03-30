import React from 'react'
import styles from './contactItem.module.css'

const ContactItem = ({ contact: { name, number, id }, deleteContact }) => (
  
    <li className={styles.li} >
      <p className={styles.p}>{name}</p>
      <p className={styles.p} >{number}</p>
      <button className={styles.delete} onClick={deleteContact} type="button" id={id}>
        x
      </button>
    </li>

)
export default ContactItem;