const loginEndpoint = 'http://localhost:9090/DiaryApp/api/login';

const getLogIn = async () => {
    try {
        const formData = new FormData(document.getElementById('signin-form'))

        const response = await fetch(loginEndpoint, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        
        const loginMessage = document.getElementById('login-message');

        if(response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            loginMessage.textContent = 'Successfuly logged in...';
            loginMessage.style.color = 'white';
        } else {
            const errorMessage = await response.text();
            console.error('Error login in: ', errorMessage);

            if (response.status === 401) {
                loginMessage.textContent = 'Invalid username or password. Please try again.';
            } else {
                loginMessage.textContent = 'Login failed. Please try again.';
            }
            loginMessage.style.color = 'white';
        }
    } catch (error) {
        console.error('Error loging in: ',  error);

        loginMessage.textContent = 'Login failed!';
        loginMessage.style.color = 'white';
    }
};

document.getElementById('signin-form').addEventListener('submit', function (event) {
    event.preventDefault();
    getLogIn();
})