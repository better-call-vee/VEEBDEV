import React, { use, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = ({ usersPromise }) => {
    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers)
    console.log(users);

    useEffect(() => {
        // Fetch initial users
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error("Fetch error:", err));
    }, []);

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    newUser._id = data.insertedId; // if only when the the user is inserted, we are setting that id to the newUser's id
                    const newUsers = [...users, newUser];
                    setUsers(newUsers);
                    alert('User added successfully.');
                    e.target.reset();
                }
            })
            .catch(err => console.error("Add user error:", err));
    };

    const handleUserDelete = (id) => {
        console.log('delete this user', id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainingUsers = users.filter(user => user._id !== id); // not taking the deleted id and moving on
                    setUsers(remainingUsers);
                    console.log('after delete', data);
                }
            })
    }

    return (
        <div>
            {/* Add User Form */}
            <h4>Users: {users.length} </h4>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" required />
                <br />
                <input type="email" name="email" required />
                <br />
                <input type="submit" value="Add User" />
            </form>

            {/* Display Users */}
            <div>
                {
                    users.map(user => <p
                        key={user._id}>
                        {user.name} : {user.email}
                        <Link to={`/users/${user._id}`}>Details</Link>
                        <Link to={`/update/${user._id}`}>Edit</Link>
                        <button onClick={() => handleUserDelete(user._id)}>x</button> {/* arrow function to cover up the event handler with parameters. otherwise, automatically will be deleted*/}
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;