const modal = document.getElementById("add-modal");
const addBtn = document.getElementById("add-movie");
const backdrop = document.getElementById("backdrop");
const cancelBtn = modal.querySelector(".btn--passive")
const addMovieBtn = modal.querySelector(".btn--success");
const userInputs = document.querySelectorAll("input");
const movies = [];
const entryTextSection = document.getElementById("entry-text");
const unorderedList = document.getElementById("movie-list");
const newMovieElement = document.createElement("li");

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const closeMovieModal = () =>{
    backdrop.classList.remove('visible');
}

const clearInput = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
}

const updateUi = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = "block";
    } else {
        entryTextSection.style.display = "none";
    }
}

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for (let index = 0; index < movies.length; index++) {
        if (movies[index].id === movieId) {
            break;
        }
    }
    movies.splice(movieIndex, 1);
    unorderedList.children[movieIndex].remove();
};

const deleteMovieHandler = (movieId) => {
    const deleteMovieModal = document.getElementById("delete-modal");
    deleteMovieModal.classList.add("visible");
    toggleBackdrop()
    deleteMovie(movieId);
}

const renderMovieElement = (id, title, imageUrl, rating) => {
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    unorderedList.appendChild(newMovieElement);
};

const addMovieModal = () => {
    modal.classList.add('visible');
    toggleBackdrop();
};

const backdropClickHandler = () => {
    addMovieModal();
};

const clickCancelHandler = () => {
    addMovieModal();
};

const addMovie = () => {
    const movieTitle = userInputs[0].value;
    const imageUrl = userInputs[1].value;
    const rating = userInputs[2].value;

    if (
        movieTitle.trim() === "" ||
        imageUrl.trim() === "" ||
        rating.trim() === "" ||
        +rating < 1 ||
        +rating > 5
    ) {
        alert("Please enter valid values (rating must be between 1 and 5).");
        return;
    }

    let newId = 0;
    const newMovie = {
        id: Math.random().toString(),
        title: movieTitle,
        Url: imageUrl,
        rating: rating
    }
    movies.push(newMovie);
    console.log(movies)
    addMovieModal();
    clearInput();
    renderMovieElement(newMovie.id, newMovie.title, newMovie.Url, newMovie.rating);
    updateUi();
};

addBtn.addEventListener('click', addMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelBtn.addEventListener('click', clickCancelHandler);
addMovieBtn.addEventListener('click', addMovie);