import React, {Component} from 'react';
import Phonebook from './phonebook/Phonebook';
import Contacts from './contacts/Contacts'
import Filter from './filter/Filter'
import Alert from './alert/Alert'
import { CSSTransition } from 'react-transition-group';
import styles from './app.module.css'
import logo from './animation/logo.module.css'
import filterTransition from './animation/filterTransition.module.css'
import alertTransition from './animation/alertTransition.module.css'

class App extends Component {
  state = { 
      contacts: [],
      filter: '',
      showLogo: false,
      alertOn: false
  }

  getValue = value => {
    const isNameTaken = this.state.contacts.some(contact => contact.name.toLowerCase() === value.name.toLowerCase())
    !isNameTaken ? 
    this.setState(prev => ({
      contacts: [value, ...prev.contacts]
    })): this.setState({ alertOn: true })

    setTimeout(() => {
      this.setState({ alertOn: false });
    }, 2000);
  };

  filter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  componentDidMount(){
    const contacts = (localStorage.getItem('contacts') !== null) ? JSON.parse(localStorage.getItem('contacts')) : [];
    this.setState({contacts, showLogo: true})
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
  
  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  render() {
    
    return (
      <div>
        <CSSTransition 
          in={this.state.showLogo}
          timeout={1000}
          classNames={logo}>
           <h2 className={styles.logo}>Phonebook</h2>
        </CSSTransition>

        <Phonebook {...this.state} onGetValue={this.getValue}/>
      
        {(this.state.contacts.length > 2) && (
          <CSSTransition  
              timeout={500} 
              classNames={filterTransition}> 
              <Filter filter={this.filter} />
          </CSSTransition>)
        }

          <CSSTransition 
            in={this.state.alertOn}
            timeout={1000} 
            classNames={alertTransition}
            unmountOnExit>
            <Alert />
          </CSSTransition>
      
        <Contacts 
        contacts={this.getFilteredContacts()}
        deleteContact={this.deleteContact}/>
      </div>
    );
  }
}

export default App;
