const double = (numbers) => {
    let result = [];

    for (const number of numbers) {
        result.push(number * 2);
    }

    return result;
}

let arr = [1, 5, 3, 8, 9, 8];
console.log(double(arr));

const doubleMap = (numbers) => {
    return numbers.map(number => number * 2);
}

let art = [1, 5, 3, 8, 9, 8];
console.log(doubleMap(art));