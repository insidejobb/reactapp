import React, { useState } from 'react';
import './SignupForm.css'; // Import CSS file for styling

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    setFormData({
      name: '',
      password: '',
      email: '',
      phone: '',
      profession: '',
    });
    alert('Signup successful!');
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
        />
        <select name="profession" value={formData.profession} onChange={handleChange} className="form-input">
          <option value="">Select Profession</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </select>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
