function listToArray(array) {
    let list = {};
    let noRest;

    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            list["Value"] = array[i];
            list["rest"] = {};
            noRest = null;
        }
        else {
            array[i] = list["Value"];
            list["rest"] = {};
            list["rest"] = null;
        }
    }
    return list;
}

let array = [1, 2, 3];
console.log(listToArray(array));