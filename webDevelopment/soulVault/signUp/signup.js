const registerEndpoint = 'http://localhost:9090/DiaryApp/api/registration';

const getSignUp = () => {
    const formData = new FormData(document.getElementById('signup-form'));

    fetch(registerEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })
    .catch(error => {
        console.error('Error during registration:', error);
    });
};

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    getSignUp();
});


