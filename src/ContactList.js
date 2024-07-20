import React from 'react';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      {contacts.map((contact, index) => (
        <div key={index} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
          {contact.profilePicture && (
            <img 
              src={contact.profilePicture} 
              alt="Profile" 
              style={{ width: '100px', height: '100px', marginRight: '10px' }} 
            />
          )}
          <div>
            <strong>Name:</strong> {contact.name}
          </div>
          <div>
            <strong>Email:</strong> {contact.email}
          </div>
          <div>
            <strong>Contact Number:</strong> {contact.contactNumber}
          </div>
          <button onClick={() => deleteContact(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
