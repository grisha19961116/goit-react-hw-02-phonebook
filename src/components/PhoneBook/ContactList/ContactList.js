import style from './ContactList.module.css';
import React, { Component } from 'react';
class ContactList extends Component {
  render() {
    const { propContactsFilter, filterByInput } = this.props;
    if (propContactsFilter === []) {
      return null;
    }
    return (
      <ul>
        {propContactsFilter.length > 0 &&
          propContactsFilter.map(({ id, nickName, number }) => {
            const li = (
              <li key={id}>
                <span>{nickName} : </span>
                <span>{number}</span>
              </li>
            );
            if (filterByInput === '') {
              return li;
            } else if (nickName.toLowerCase() === filterByInput.toLowerCase()) {
              return li;
            }
          })}
      </ul>
    );
  }
}
export default ContactList;
