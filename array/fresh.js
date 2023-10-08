let newArray = [];
newArray.push(["car", 2000]);
newArray.push(["Truck", 500]);
newArray.push(["Bike", 6500]);

console.table(newArray);

newArray.push(["Scooter", 1500]);
console.table(newArray);

newArray[0][2] = ["Toyota", "Nissan"];
newArray[1][2] = ["Ford"];
newArray[2][2] = ["Honda"];

console.table(newArray);