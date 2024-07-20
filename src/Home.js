import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

import React, { useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import NavBar from './NavBar';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

Amplify.configure(amplifyconfig);

const App = ({ signOut, user }) => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center'
    }
  };

  return (
    <div>
      <NavBar signOut={signOut} user={user} />
      <div style={styles.container}>
        <h1>Contact App</h1>
        <ContactForm addContact={addContact} />
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      </div>
    </div>
  );
};

export default withAuthenticator(App);
