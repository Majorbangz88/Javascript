let x = range(2, 10);
console.log(x);

let newArray = [2, 4, 6, 8, 10];
console.log(sum(newArray));

let y = range(5, 2, -1);
console.log(y);

function range(start, end) {
    let array = [];
    for (let index = start; index <= end; index++) {
        array.push(index);
    }
    return array;
}

function sum(number) {
    let sum = 0;
    for (let index = 0; index < number.length; index++) {
        sum += number[index];
    }
    return sum;
}

function range(startIndex, endIndex, stepBy) {
    let array = [];
    if (stepBy > 0) {
        for (let index = startIndex; index <= endIndex; index+=stepBy) {
            array.push(index);
        }
    }
    else {
        for (let index = startIndex; index >= endIndex; index+=stepBy) {
            array.push(index);
        }
    }
    return array;
}