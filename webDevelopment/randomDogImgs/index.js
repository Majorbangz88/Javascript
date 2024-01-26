const url = 'https://dog.ceo/api/breeds/image/random'

const dogImage = document.getElementById("dogImage");

const dogButton = document.getElementById("dogButton");

const getRandomDogs = () => {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        dogImage.innerHTML = `<img src="${json.message}" width=300px height=300px/>`
        
    })
}

dogButton.onclick = () => getRandomDogs();