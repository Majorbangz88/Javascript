let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverseArray(array));

function reverseArray(number) {
    let newArray = [];
    for (let index = number.length; index > 0 ; index--) {
        newArray.push(index);
    }
    return newArray;
}