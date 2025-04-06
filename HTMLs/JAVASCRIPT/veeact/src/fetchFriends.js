// ======== fetchFriends.js ========
// A function to get users from an API.
// Returns a promise containing users data.

export const fetchFriends = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
};
