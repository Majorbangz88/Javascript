let x = isEven(-1);
console.log(x)


function isEven(number) {
    if (number >= 0) {

        let even = 0;
        let odd = 1;

        if (number === even) {
            return number + " is even";
        }
        else if (number === odd) {
            return number + " is odd";
        }
        return isEven(number - 2);
    } else {
        return "Number should be >= 0"
    }
    
}