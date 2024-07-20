import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = { name, email, contactNumber, profilePicture };
    addContact(newContact);
    setName('');
    setEmail('');
    setContactNumber('');
    setProfilePicture(null);
  };

  const handleFileChange = (event) => {
    setProfilePicture(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
      </div>
      <div>
        <label>
          Contact Number:
          <input 
            type="text" 
            value={contactNumber} 
            onChange={(e) => setContactNumber(e.target.value)} 
            required 
          />
        </label>
      </div>
      <div>
        <label>
          Profile Picture:
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
          />
        </label>
      </div>
      {profilePicture && (
        <div>
          <img 
            src={profilePicture} 
            alt="Profile Preview" 
            style={{ width: '100px', height: '100px', marginTop: '10px' }} 
          />
        </div>
      )}
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
