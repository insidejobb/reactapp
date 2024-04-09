// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css'; // Import CSS file for styling

function LoginForm({ onLogin }) {
  const [loginData, setLoginData] = useState({
    name: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.name === loginData.name && storedData.password === loginData.password) {
      if (typeof onLogin === 'function') {
        onLogin();
      } else {
        console.error('onLogin is not a function');
      }
    } else {
      alert('Invalid Credentials');
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={loginData.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="submit-button">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
