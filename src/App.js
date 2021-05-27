import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import ContactList from './components/ContactList/ContactList.js';
import ContactForm from './components/ContactForm/ContactForm.js';
import Filter from './components/Filter/Filter.js';
import style from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handleCheckUniqueContact = name => {
    const { contacts } = this.state;
    const isExistContact = contacts.some(contacts => contacts.name === name);
    isExistContact && alert('Credentials has already existed');
    return !isExistContact;
  };

  handleRemoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  handleFilterChange = filter => this.setState({ filter });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h2>From Contact</h2>
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUniqueContact}
        />
        <h2>Contacts list</h2>
        <Filter listenerOnChange={this.handleFilterChange} />
        <ContactList
          contacts={visibleContacts}
          listenerOnRemove={this.handleRemoveContact}
        />
        <ToastContainer></ToastContainer>
      </>
    );
  }
}
