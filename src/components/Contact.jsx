// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${name}, we received your message!`);
    };

    return (
        <div>
            <h2>Contact Us</h2>
             {/* Adding an image */}
             <img src="../images/Bolani2.jpg" alt="Contact" className="contact-image" />
            
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Message:</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
