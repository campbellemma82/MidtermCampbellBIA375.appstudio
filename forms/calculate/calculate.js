function calcAvgSquare (num1,num2,num3){
    let avgSquare = ((num1 + num2 + num3)/3) * (num1**2)
    return avgSquare
}

let number1 = Number(prompt("Enter a number"))
let number2 = Number(prompt("Enter a second number"))
let number3 = Number(prompt("Enter a third number"))

let functionAnswer = calcAvgSquare(number1,number2,number3)
alert(`The answer is ${functionAnswer}.`)

