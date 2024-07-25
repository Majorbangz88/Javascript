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
            registrationMessage.style.color = 'white';
        } else {
            const errorMessage = await response.text();
            console.error('Error during registration:', errorMessage);

            if (response.status === 401) {
                loginMessage.textContent = 'Username taken. Please try again.';
            } else {
                loginMessage.textContent = 'Sign up failed. Please try again.';
            }
            registrationMessage.style.color = 'white';
        }
    } catch (error) {
        console.error('Error during registration:', error);

        registrationMessage.textContent = 'An error occurred during registration. Please try again.';
        registrationMessage.style.color = 'white'; 
    }
};

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    getSignUp();
});
