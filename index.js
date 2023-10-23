// console.log("Hello Joel");
// let counter = 0;
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 10; j++) {
//     process.stdout.write("* ")
//     counter++;

//     if (counter == 10) {
//         process.stdout.write(" *")
//     }
//     counter = 0;
//   }
  
//   console.log();
// }

// for (let i = 0; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         process.stdout.write("*")
//     }
// }
const output = function(number, times) {
    let product = 0;

    for (let i = 0; i < times; i++) {
        product += number;
    }
    return product;
}

console.log(output(2, 7));
