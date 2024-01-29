// const homeIcon = document.getElementById('home-icon');

// const goToHome = () => {

//     const anchor = document.createElement('<a>');
//     anchor.href = 'http://localhost:5500/webDevelopment/soulVault/index.html';

//     document.body.appendChild(anchor);

//     anchor.click();

//     document.body.removeChild(anchor)
// }

// homeIcon.addEventListener('click', function(event) {
//     event.preventDefault();
//     goToHome();
// })

// Assuming you are still using goToHome function
const goToHome = () => {
    window.location.href = 'http://localhost:5500/webDevelopment/soulVault/index.html';
};

// Attach event listener to the surrounding anchor (a) element
const homeLink = document.querySelector('a[href="http://localhost:5500/webDevelopment/soulVault/index.html"]');
homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    goToHome();
});


