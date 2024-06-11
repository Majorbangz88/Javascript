const thisFunction = (param) => {
    const newObject = {};

    for (let i = 0; i < param.length; i++) {
        newObject[param[i]] = param[i - 1];
    }
    return newObject;
}

const object = [2, 3, 5, 3, 3, 2, 5];
const result = thisFunction(object);
console.log(result);
