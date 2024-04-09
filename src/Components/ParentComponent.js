// ParentComponent.js
import React from 'react';
import LoginForm from './LoginForm';

function ParentComponent() {
  const handleLogin = () => {
    console.log('Login successful');
  };

  return (
    <div>
      <h1>Welcome to the Parent Component</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default ParentComponent;
