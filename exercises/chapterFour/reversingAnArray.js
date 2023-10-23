let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverseArray(array));
console.log(reverseArrayInPlace(array));

function reverseArray(number) {
    let newArray = [];
    for (let index = number.length; index > 0 ; index--) {
        newArray.push(index);
    }
    return newArray;
}

function reverseArrayInPlace(newNumber) {
    for (let index = 0; index < newNumber.length; index++) {
        for (let counter = index + 1; counter < newNumber.length; counter++) {
            let temp = newNumber[index];
            newNumber[index] = newNumber[counter];
            newNumber[counter] = temp;
        }
    }
    return newNumber;
}

// function reverseArrayInPlace(newNumber) {
//     let firstPointer = 0;
//     let secondPointer = 1;
//     while (firstPointer < newNumber.length - 1) {
//         let temp = newNumber[firstPointer];
//         newNumber[firstPointer] = newNumber[secondPointer];
//         newNumber[secondPointer] = temp;
//         firstPointer--;
//     }
//     return newNumber;
// }