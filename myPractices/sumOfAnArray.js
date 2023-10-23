const sum = (array) => {
    let result = 0;

    for (const number of array) {
        result += number;
    }

    return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sum(arr));

module.exports = { sum }