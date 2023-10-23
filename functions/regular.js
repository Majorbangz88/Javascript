// function sum(x, y) {
//     return x + y;
// }

// function square(x) {
//     return x * x;
// }

// function sumOfSquare(x, y) {
//     return sum(square(x), square(y));
// }

let val = [200, 4, 25, 2, 1, 3];
let firstPointer = 0;
let secondPointer = 1;

while (firstPointer < val.length - 1) {
    if (val[firstPointer] > val[secondPointer]) {
        let temp = val[firstPointer];
        val[firstPointer] = val[secondPointer];
        val[secondPointer] = temp;

    }

    if (secondPointer === val.length) {
        firstPointer++;
        secondPointer = firstPointer + 1;
    }
} 
console.log(val);