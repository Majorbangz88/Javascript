const outcome = (str, n) => {
    let frontLen = 3;
    if (frontLen > str.length) {
        frontLen = str.length;
    }

    let front = str.substring(0, frontLen)

    let result = "";
    for (let i = 0; i < n; i++) {
        result += front;
    }

    return result;
}

let text = "chocolate";
console.log(outcome(text, 2));