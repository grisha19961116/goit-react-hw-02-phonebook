import style from './ContactForm.module.css';
import { toast } from 'react-toastify';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  validateFrom = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !phone) {
      toast('Some filed is empty');
      return false;
    }
    if (phone.length > 10) {
      toast('to long number');
      return false;
    }
    if (phone.length < 10) {
      toast('to short number');
      return false;
    }
    if (name.length > 12) {
      toast('to long name');
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => this.setState(INITIAL_STATE);

  handleFromSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { onAdd } = this.props;
    const isValidForm = this.validateFrom();
    if (!isValidForm) return;
    onAdd({ id: uuidv4(), name, phone });
    this.resetForm();
  };

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleFromSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChangeInput}
        ></input>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={this.handleChangeInput}
        ></input>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
export default ContactForm;
