console.log("Hello");

let title = document.getElementById('title');
console.log('before: ', title.innerText);

let message = "Goodbye my lover!"

title.innerText = message;

console.log('After: ', title.innerText);

title.innerHTML = `<h1>${message}</h1>`

let redDiv = document.getElementById('red');
let greenDiv = document.getElementById('green');
let yellowDiv = document.getElementById('yellow');

redDiv.onclick = ()=> console.log('You clicked red!');
yellowDiv.onclick = ()=> console.log('You clicked yello!');
greenDiv.onclick = ()=> console.log('You clicked green!');