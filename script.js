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

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email.endsWith('@nbsc.edu.ph')) {
        Toastify({
            text: "Please use an @nbsc.edu.ph email address!",
            duration: 3000,
            close: true,
            backgroundColor: "#f44336"
        }).showToast();
        return false;
    }

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        Toastify({
            text: "Login successful! Welcome " + user.username,
            duration: 3000,
            close: true,
            backgroundColor: "#4CAF50"
        }).showToast();
        event.target.reset();
    } else {
        Toastify({
            text: "Invalid email or password combination!",
            duration: 3000,
            close: true,
            backgroundColor: "#f44336"
        }).showToast();
    }
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
