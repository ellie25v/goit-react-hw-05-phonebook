import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './contactItem/ContactItem'
import itemTransition from '../animation/itemTransition.module.css'

const Contacts = ({ contacts, deleteContact }) => (
  <>
    <TransitionGroup component="ul">
      {contacts.map(contact => (
        <CSSTransition key={contact.id} timeout={1000} classNames={itemTransition} unmountOnExit>
          <ContactItem contact={contact}  deleteContact={deleteContact} id={contact.id}/>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

export default Contacts;