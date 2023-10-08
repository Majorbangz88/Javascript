let leftOperand = 5;
let rightOperand = 5;
let ans;
let operator = "*";
switch (operator) {
    case "+" : ans = leftOperand + rightOperand;
    break;
    case "-" : ans = leftOperand - rightOperand;
    break;
    case "*" : ans = leftOperand * rightOperand;
    break;
    case "/" : ans = leftOperand * rightOperand;
    break
    default : ans = NAN;
}
console.log(ans)