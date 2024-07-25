const h2 = document.getElementById('welcome-text');
const homeBtn = document.getElementById('nav-icon');


const goToHome = () => {
    window.location.href = '../index.html';
};

homeBtn.addEventListener('click', event => {
    event.preventDefault();
    goToHome();
});

const modals = {
    newEntryModal: document.getElementById('newEntryModal'),
    viewEntriesModal: document.getElementById('viewEntriesModal'),
    updateEntryModal: document.getElementById('updateEntryModal'),
    deleteEntryModal: document.getElementById('deleteEntryModal'),
    clearEntriesModal: document.getElementById('clearEntriesModal')
};

const buttons = document.querySelectorAll('#functionalities.button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        modals[modalId].style.display = 'block';
    });
});

Object.values(modals).forEach(modal => {
    const closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});

window.onclick = function(event) {
    Object.values(modals).forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

const username = window.localStorage.getItem('username');
console.log(username);
h2.innerHTML = `Hello, ${username}`;



