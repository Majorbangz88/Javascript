let newArray = []

let row1 = [];
let row2 = [];
let row3 = [];

let obj1 = {
    name: "Sydney", 
    population: 3_000_000, 
    temperture: 7, 
    currency: "NGN"
};

let obj2 = {
    name: "Lagos", 
    population: 25_000_000, 
    temperture: 8, 
    currency: "NGN"
};

let obj3 = {
    name: "Jo'burg", 
    population: 5_000_000, 
    temperture: 3, 
    currency: "rand"
};

let obj4 = {
    name: "Abuja", 
    population: 3_000_000, 
    temperture: 5, 
    currency: "NGN"
};

let obj5 = {
    name: "Toronto", 
    population: 1_000_000, 
    temperture: -5, 
    currency: "Dol"
};

let obj6 = {
    name: "Quebec", 
    population: 3_000_000, 
    temperture: -19, 
    currency: "Dol"
};

let obj7 = {
    name: "Abakpa", 
    population: 3_000_000, 
    temperture: 7, 
    currency: "NGN"
};

let obj8 = {
    name: "Obiagu", 
    population: 1_000_000, 
    temperture: 7, 
    currency: "NGN"
};

let obj9 = {name: "Awka", 
population: 3_000_000, 
temperture: 10, 
currency: "NGN"
}

row1.push(null, obj1, obj2, obj3);
row2.push(obj4, obj5, obj6, null);
row3.push(obj7, null, obj8, obj9);

newArray.push(row1);
newArray.push(row2);
newArray.push(row3);

console.table(newArray)

let sum = 0;
for (var row = 0; row < newArray.length; row++) {
    for (var column = 0; column < newArray[row].length; column++) {
        if (newArray[row][column] === null) {
            continue;
        }
        else if (newArray[row][column].temperture < 10) {
            console.log(newArray[row][column].name, newArray[row][column].population)
            sum += newArray[row][column].population
        }
    }
}
console.log(sum);
