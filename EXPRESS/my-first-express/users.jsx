import React, { useState, useEffect } from 'react';

const User = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [users, setUsers] = useState([]);

    // Fetch users after form submission or on load
    const fetchUsers = async () => {
        const res = await fetch('http://localhost:9000/users');
        const data = await res.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers(); // load users initially
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:9000/users', {
            method: 'POST',                 // Method type
            headers: {
                'Content-Type': 'application/json' // Important to tell server we are sending JSON
            },
            body: JSON.stringify(formData) // Convert JS object to JSON string
        });

        const data = await response.json();
        console.log('✅ User added:', data);

        setFormData({ name: '', email: '' }); // Clear form
        fetchUsers(); // Refresh user list
    };

    return (
        <div>
            <h2>Create a User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <button type="submit">Add User</button>
            </form>

            <h3>Users List</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default User;
