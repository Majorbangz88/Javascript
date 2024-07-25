function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

const loginEndpoint = 'http://localhost:9090/DiaryApp/api/login';

const getLogIn = async () => {
    try {
        const formData = new FormData(document.getElementById('signin-form'));
        const response = await fetch(loginEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });

        const loginMessage = document.getElementById('login-message');

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            loginMessage.textContent = 'Successfully logged in.';
            loginMessage.style.color = 'green';
        } else {
            const errorMessage = await response.text();
            console.error('Error logging in:', errorMessage);
            loginMessage.textContent = response.status === 401 ? 'Invalid username or password. Please try again.' : 'Login failed. Please try again.';
            loginMessage.style.color = 'red';
        }
    } catch (error) {
        console.error('Error logging in:', error);
        const loginMessage = document.getElementById('login-message');
        loginMessage.textContent = 'Login failed!';
        loginMessage.style.color = 'red';
    }
};

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    getLogIn();
});

const registerEndpoint = 'http://localhost:9090/DiaryApp/api/registration';

const getSignUp = async () => {
    try {
        const formData = new FormData(document.getElementById('signup-form'));
        const response = await fetch(registerEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });

        const registrationMessage = document.getElementById('registration-message');

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            registrationMessage.textContent = 'Registration successful!';
            registrationMessage.style.color = 'green';
        } else {
            const errorMessage = await response.text();
            console.error('Error during registration:', errorMessage);
            registrationMessage.textContent = response.status === 401 ? 'Username taken. Please try again.' : 'Sign up failed. Please try again.';
            registrationMessage.style.color = 'red';
        }
    } catch (error) {
        console.error('Error during registration:', error);
        const registrationMessage = document.getElementById('registration-message');
        registrationMessage.textContent = 'An error occurred during registration. Please try again.';
        registrationMessage.style.color = 'red';
    }
};

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    getSignUp();
});
