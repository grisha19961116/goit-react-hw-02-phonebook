import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

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

  handleCheckUniqueContact = (name, phone) => {
    const { contacts } = this.state;
    const isExistName = contacts.some(contacts => contacts.name === name);
    const isExistPhone = contacts.some(contacts => contacts.phone === phone);
    isExistName &&
      toast.warn('⚠️ You have contact with same name!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    isExistPhone &&
      toast.error('🚀 Number has been using!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    return !isExistPhone;
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
        <h2 className={style.titleList}>From Contact</h2>
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUniqueContact}
        />
        <h2 className={style.titleList}>Contacts list</h2>
        <Filter listenerOnChange={this.handleFilterChange} />
        <ContactList
          contacts={visibleContacts}
          listenerOnRemove={this.handleRemoveContact}
        />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}
