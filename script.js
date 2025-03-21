// Mock user storage
const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
};

