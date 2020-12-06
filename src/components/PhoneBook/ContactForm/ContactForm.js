import style from './ContactForm.module.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Filter from '../Filter/Filter.js';
class ContactForm extends Component {
  state = {
    nick: '',
    phoneNumber: '',
    contacts: [],
  };
  reset = () => {
    this.setState({
      nick: '',
      phoneNumber: '',
    });
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => {
      if (name === 'nick') {
        return {
          nick: value,
        };
      } else if (name === 'phoneNumber') {
        return {
          phoneNumber: value,
        };
      }
    });
  };
  handleSubmit = even => {
    const { contacts, nick } = this.state;
    even.preventDefault();
    if (contacts.length > 0) {
      contacts.find(elem => {
        if (elem.nickName === nick) {
          alert(
            `we have already contact with this nick name "${nick.toLocaleUpperCase()}"`,
          );
          this.reset();
        }
      });
    }
    this.setState(({ nick, phoneNumber }) => {
      if (nick === '' || phoneNumber === '') {
        return {
          contacts: [...contacts],
        };
      } else if (contacts.length === 0) {
        return {
          contacts: [{ nickName: nick, id: uuidv4(), number: phoneNumber }],
        };
      } else {
        return {
          contacts: [
            ...contacts,
            { nickName: nick, id: uuidv4(), number: phoneNumber },
          ],
        };
      }
    });
    this.reset();
  };
  delete(id) {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
    console.log(this.state.contacts.length, `click`);
    console.log(id);
  }
  render() {
    const { nick, phoneNumber, contacts } = this.state;
    console.log(contacts.length, `before props`);
    return (
      <>
        <h1>PhoneBook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              value={nick}
              type="text"
              name="nick"
              placeholder="Enter user Name and Surname"
              onChange={this.handleChange}
            />
          </label>
          <label>
            phoneNumber
            <input
              value={phoneNumber}
              type="number"
              name="phoneNumber"
              placeholder="Enter user phoneNumber"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add to contacts</button>
        </form>
        <div>
          <Filter propContacts={contacts} />
          <ul className={style.ul__delete}>
            {contacts.map(({ id }) => {
              return (
                <li className={style.li__delete}>
                  <button
                    type="click"
                    key={id}
                    id={id}
                    className={style.button__delete}
                    onClick={this.delete.bind(this, id)}
                  >
                    Delete!
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
export default ContactForm;
