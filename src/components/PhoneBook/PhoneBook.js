import style from './PhoneBook.module.css';
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm.js';
class PhoneBook extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <ContactForm />
      </div>
    );
  }
}
export default PhoneBook;
