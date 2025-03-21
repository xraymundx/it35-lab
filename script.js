// Mock user storage
const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
};

const saveUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
};

function handleRegistration(event) {
    event.preventDefault();

    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    if (!email.endsWith('@nbsc.edu.ph')) {
        alert('Please use an @nbsc.edu.ph email address!');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    const users = getUsers();
    if (users.some(user => user.email === email)) {
        const modal = new bootstrap.Modal(document.getElementById('errorModal'));
        document.getElementById('errorMessage').textContent = 'Email already registered!';
        modal.show();
        return false;
    }

    saveUser({ username, email, password });
    alert('Registration successful! Please login.');
    toggleForms();
    event.target.reset();
    return false;
}

function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}
