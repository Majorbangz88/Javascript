let num = "48";
let x = myFunction(num);
console.log(x);


function myFunction(number) {
    let total = 0;
    for (let index = 0; index < number.length; index++) {
        total += Number(number.charAt(index));
    }
    console.log(total)
    let newTotal = total + "";
    if (newTotal > 9) {
        total = myFunction(newTotal);
    }
    return total;
}