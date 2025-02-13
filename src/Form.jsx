import React, { useState } from 'react';
import './style.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sanitizeInput = (input) => {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message)
    };

    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.message) {
      setErrorMessage("All fields are required.");
      setMessageType('failure');
      setFadeOut(false);
      setTimeout(() => setFadeOut(true), 4500);
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(sanitizedData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setMessageType('failure');
      setFadeOut(false);
      setTimeout(() => setFadeOut(true), 4500);
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    console.log("Form submitted with sanitized data:", sanitizedData);
    setErrorMessage("Form submitted.");
    setMessageType('success');
    setFadeOut(false);
    setTimeout(() => setFadeOut(true), 4500);
    setTimeout(() => setErrorMessage(''), 5000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          name
        </label>
        <input type="text" name="name" placeholder="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>
          email
        </label>
        <input type="email" name="email" placeholder="email@email.com" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group-full">
        <label>
          message
        </label>
        <textarea name="message" placeholder="your message here..." value={formData.message} onChange={handleChange}></textarea>
      </div>
      <div className="submit-container">
        <input type="submit" value="submit" />
        {errorMessage && <div className={`error-message ${fadeOut ? 'fade-out' : ''}`} id={messageType}>{errorMessage}</div>}
      </div>
    </form>
  );
};

export default Form;