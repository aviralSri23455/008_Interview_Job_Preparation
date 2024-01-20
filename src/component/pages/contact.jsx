import React, { useState } from 'react';
import './CSS2/contact.css';

const CombinedLoginForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login clicked');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-form-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={`user-box ${username ? 'focus' : ''}`}>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <label>Username</label>
          </div>
          <div className={`user-box ${email ? 'focus' : ''}`}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label>Email</label>
          </div>
          <div className={`user-box ${password ? 'focus' : ''}`}>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CombinedLoginForm;
