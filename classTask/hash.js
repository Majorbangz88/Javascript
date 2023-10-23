function backspace(s, t) {

    let text2 = "";
    let text = "";

    for (let word of s) {
        if (word === "#") {
            text = text.slice(0, text.length - 1)
        }
        else {
            text += word;
        }
    }

    for (let word of t) {
        if (word === "#") {
            text2 = text2.slice(0, text2.length - 1)
        }
        else {
            text2 += word;
        }
    }

    return text === text2;

    // backspace(text, text2);
}

let text1 = "aqgh#hzxy###";

let newText = "aqgh";
let newResult = backspace(text1, newText)
console.log(newResult);