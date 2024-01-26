// const mainHeading = document.getElementById("main-heading")
// console.log(mainHeading);

// const listItems = document.getElementsByClassName("the-list")
// console.log(listItems);

// const li = document.getElementsByTagName("li");
// console.log(li);

// const firstListItem = document.querySelector('.the-list');

// console.log(firstListItem.innerText);
// console.log(firstListItem.innerContent);
// console.log(firstListItem.innerHtml);

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// ul.append(li);

// li.innerText = 'X-men';

// li.setAttribute('id', 'main-heading')
// li.style.color = 'white';

// const buttonTwo = document.querySelector('.inner-divs-2')

// function alertBox() {
//     alert('I also love javascript')
// }

// buttonTwo.addEventListener('click', alertBox)

// const changeBgColor = document.querySelector('.inner-divs-3');

// const bgColor = () => {
//     changeBgColor.style.backgroundColor = 'black';
// }

// changeBgColor.addEventListener('mouseover', bgColor)

const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content')

function revealMore() {
    if (hiddenContent.classList.contains('.reveal-btn')) {
        hiddenContent.classList.remove('.reveal-btn')
        } else {
            hiddenContent.classList.add('.reveal-btn')
        }
}

revealBtn.addEventListener('click', revealMore);