import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from './Layout';
import List from './List';

import Contacts from '../services/contacts';

class AddressBook extends Layout {
  static propTypes = {
    ...Layout.propTypes,
    className: PropTypes.string,
  };

  state = { contacts: [] };

  async componentDidMount() {
    this.setState({ contacts: await Contacts.read() });
  }

  render() {
    const { className } = this.props;
    const { contacts } = this.state;

    const element = super.render();

    return (
      element && (
        <main className={className}>
          <List items={contacts} />
          {element}
        </main>
      )
    );
  }
}

export default styled(AddressBook)``;
