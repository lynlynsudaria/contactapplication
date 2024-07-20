import React from 'react';

const ContactItem = ({ contact, index, deleteContact }) => {
  return (
    <li>
      <span>{contact.name} - {contact.email}</span>
      <button onClick={() => deleteContact(index)}>Delete</button>
    </li>
  );
};

export default ContactItem;
