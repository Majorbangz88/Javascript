function reduce(array, combine, start) {
    let result = start;
    let newResult = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            result = combine(result, array[i]);
        }
        newResult.push(result);
    }
    return newResult;
}

let array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(reduce(array1, (a, b) => a + b, 0));
