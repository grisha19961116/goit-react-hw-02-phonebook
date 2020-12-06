import style from './Filter.module.css';
import React, { Component } from 'react';
import ContactList from '../ContactList/ContactList.js';
class Filter extends Component {
  state = {
    filter: '',
  };
  handleChangeFilter = ({ target }) => {
    const { value, name } = target;
    this.setState(() => {
      if (name === 'filter') {
        return {
          filter: value,
        };
      }
    });
  };
  render() {
    const { filter } = this.state;
    const { propContacts } = this.props;
    return (
      <>
        <h2>Contacts</h2>
        <label className={style.label__filter}>
          Find contact by name
          <input
            className={style.input__filter}
            value={filter}
            type="text"
            name="filter"
            placeholder="Enter user nick name"
            onChange={this.handleChangeFilter}
          />
        </label>

        <ContactList propContactsFilter={propContacts} filterByInput={filter} />
      </>
    );
  }
}
export default Filter;
