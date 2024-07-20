import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          contact={contact}
          index={index}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
