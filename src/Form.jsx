import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import validator from 'validator';
import './style.css';

const Form = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  const [messageType, setMessageType] = useState('');

  const form = useRef();

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = async(e) => {
    e.preventDefault();

    if (!formData.from_name.trim() || !formData.from_email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill out all fields.");
      setMessageType('failure');
      setFadeOut(false);
      setTimeout(() => setFadeOut(true), 4500);
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    if (!validator.isEmail(formData.from_email)) {
      setErrorMessage("Please enter a valid email address.");
      setMessageType('failure');
      setFadeOut(false);
      setTimeout(() => setFadeOut(true), 4500);
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }
    )
      .then(
        () => {
          setErrorMessage("Form submitted successfully.");
          e.target.reset();
          setFormData({ from_name: '', from_email: '', message: '' });
          setMessageType('success');
          setFadeOut(false);
          setTimeout(() => setFadeOut(true), 4500);
          setTimeout(() => setErrorMessage(''), 5000);
        },
        (error) => {
          setErrorMessage("Error submitting form."); 
          setMessageType('failure');
          setFadeOut(false);
          setTimeout(() => setFadeOut(true), 4500);
          setTimeout(() => setErrorMessage(''), 5000);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-group">
        <label>name</label>
        <input type="text" name="from_name" placeholder="name" value={formData.from_name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>email</label>
        <input type="email" name="from_email" placeholder="email@email.com" value={formData.from_email} onChange={handleChange} />
      </div>
      <div className="form-group-full">
        <label>message</label>
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