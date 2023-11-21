let vehicle = {
    "seats": 5,
    "wheels": 4,
    "doors": 2,
    __proto__: {
        name: 'Joel'
    }
}
// console.log(vehicle.__proto__)
// console.log(Object.getPrototypeOf(vehicle))

let car = {
    model: "lambo",
    color: "peach black",
    year: '2023',
    __proto__: vehicle
}

console.log(car.color);
console.log(car.doors);