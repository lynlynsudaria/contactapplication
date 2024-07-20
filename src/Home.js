import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ user }) => {
  const navigate = useNavigate();

  const handleViewContacts = () => {
    navigate('/contacts');
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'left'
    },
    logo: {
      width: '100px',
      height: '100px',
      marginRight: '20px'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    paragraph: {
      fontSize: '1.2em',
      marginBottom: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <div style={styles.content}>
        <h1>Welcome, {user.username}!</h1>
        <p style={styles.paragraph}>This is a place where you can manage your contacts efficiently and easily.</p>
        <button onClick={handleViewContacts}>View Contacts</button>
      </div>
    </div>
  );
};

export default Home;
