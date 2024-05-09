function solution(num1, sachik, num2){
    switch(sachik){
        case "+":
        return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default:
            console.log("1");
    }
}
console.log(solution(1, "+", 2))