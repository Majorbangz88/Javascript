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

// const checkLoggedInOnLoad = () => {
//     const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';

//     if (isLoggedIn) {
//         window.location.href = 'dashboard.html';
//     }
// };

// const handleSuccessfulRegistration = async () => {
//     try {
//         const formData = new FormData(document.getElementById('signup-form'));

//         const registerResponse = await fetch(registerEndpoint, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(Object.fromEntries(formData)),
//         });

//         if (registerResponse.ok) {
//             const loginResponse = await fetch(loginEndpoint, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(Object.fromEntries(formData)),
//             });

//             if (loginResponse.ok) {
//                 sessionStorage.setItem('loggedIn', 'true');
                
//                 window.location.href = 'dashboard.html';
//             } else {
//                 console.error('Error during login after registration:', await loginResponse.text());
//             }
//         } else {
//             console.error('Error during registration:', await registerResponse.text());
//         }
//     } catch (error) {
//         console.error('Error during registration and login:', error);
//     }
// };

// document.addEventListener('DOMContentLoaded', checkLoggedInOnLoad);
// document.getElementById('signup-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     handleSuccessfulRegistration();
// });


