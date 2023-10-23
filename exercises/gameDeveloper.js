console.log(generate);


function generate() {
    let length = 3;
    let width = 3;
    let obj = [
        {row: 0, col: 0, value: "X"},
        {row: 0, col: 1, value: "X"},
        {row: 0, col: 2, value: "O"},
        {row: 1, col: 0, value: "O"},
        {row: 1, col: 1, value: " "},
        {row: 1, col: 2, value: "X"},
        {row: 2, col: 0, value: "X"},
        {row: 2, col: 1, value: "O"},
        {row: 2, col: 2, value: "O"}
    ];

    let multiArray = [];
    for (let i = 0; i < obj.length; i++) {
        for (let j = 0; j <obj[i].length; j++) {
            multiArray[i][j] = obj;
        }
    }

};