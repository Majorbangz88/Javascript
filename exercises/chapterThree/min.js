let x = minNumber(4, 5);
console.log(x)

function minNumber(number1, number2) {
    let min = number1;
    if (number2 < min) {
        min = number2;
    }
    return min
}

