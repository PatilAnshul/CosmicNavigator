// src/components/FooterForm.js
import React, { useState } from 'react';

const FooterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:4000/Home/save-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });
            alert('Information saved successfully!');
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <footer>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Save Info</button>
            </form>
        </footer>
    );
};

export default FooterForm;
