let firstWord = "anagram";
let secondWord = "nagaram";
let x = isAnagram(firstWord, secondWord);
console.log(x);

let a = "chair";
let b = "cheer";
let y = isAnagram(a, b);
console.log(y);

// function isAnagram(word) {
//     let secondWord = "";

//     for (let index = 0; index < word.length; index++) {
//         let temp = word[0];
//         word[4] = temp;
//         secondWord += word[index];
//     }
//     console.log(secondWord);
//     if (word.match(secondWord)) {
//         return true;
//     }
    
//     return false;
// }

function isAnagram(word1, word2) {

    if (word1.length != word2.length) {
        return false;
    }

    let newWord = [word1];
    let newWord2 = [word2];

    let firstCounter = 0;
    let secondCounter = 0;

    for (let index = 0; index < newWord.length; index++) {
        for (let count = 0; count < newWord2.length; count++) {

            if (word1[index] == word2[count]) {
                firstCounter++;
            }

            if (word2[count] == word1[index]) {
                secondCounter++;
            }
        }
        console.log(firstCounter);
        console.log(secondCounter)
        if (firstCounter == secondCounter) {
            return true;
        }
        else {
            return false
        }
    }
}
