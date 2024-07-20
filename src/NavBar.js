import React from 'react';
import { Button } from '@aws-amplify/ui-react';
import './NavBar.css';

const NavBar = ({ signOut, user }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Contact App</div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        
      </div>
      <div className="navbar-user">Hello {user.username}
      <Button onClick={signOut}>Sign out</Button></div>
    </nav>
  );
};

export default NavBar;
