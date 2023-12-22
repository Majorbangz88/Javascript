function orderPizza(callBack) {
    setTimeout(() => {
        let pizza = 'made pizza';
        callBack(pizza);
    }, 2000)
}

function pizzaIsReady(pizza) {
    console.log(`${pizza} is ready`);
}

console.log("Go do some laundry while we wait for pizza");
console.log("Call a friend");
orderPizza(pizzaIsReady);

function getWeather() {
    return new Promise(function(resolve, reject) {
        reject('sunny');
    })
}

const promise = getWeather();
promise.then(function(data) {
    console.log(`First param ${data}`)
}, function(data) {
    console.log(`Second param ${data}`)
});