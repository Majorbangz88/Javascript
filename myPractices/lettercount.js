const numberOfLetters = (phrase) => {
    let frequency = {};

    for (const letter of phrase) {
        if (letter in frequency) {
            frequency[letter]++;
        } else {
            frequency[letter] = 1;
        }
    }

    return frequency;
} 

const text = "you are the treasure that i seek";
console.log(numberOfLetters(text));


module.exports = { numberOfLetters };