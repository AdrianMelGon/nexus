import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContactList from './ContactList';
import Layout from './Layout';
import StatusBar from './StatusBar';

import Contacts from '../services/contacts';

class AddressBook extends Layout {
  static propTypes = {
    ...Layout.propTypes,
    className: PropTypes.string,
  };

  state = {
    contacts: [],
    filter: '',
  };

  async componentWillMount() {
    this.setState({ contacts: await Contacts.read() });
  }

  // async componentDidMount() {
  // }

  handleChange = event => {
    // let filter = event;
    const filteredContacts = [];
    this.state.contacts.forEach(e => {
      if (e.name.first.includes(event)) {
        filteredContacts.push(e);
      }
      this.setState({ contacts: filteredContacts });
    });
  };

  render() {
    const { className } = this.props;
    const { contacts } = this.state;

    const element = super.render();
    if (!element) {
      return null;
    }

    return (
      <div>
        <form style={{ marginTop: 50, marginLeft: 50 }}>
          <input
            placeholder="Search"
            onChange={event => this.handleChange(event.target.value)}
          />
        </form>

        <main className={className}>
          <StatusBar />
          <ContactList items={contacts} />
          {element}
        </main>
      </div>
    );
  }
}

export default styled(AddressBook)``;
