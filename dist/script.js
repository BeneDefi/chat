let numOne = document.querySelector("#first-number");
let mathsSymbol = document.querySelector("#math-symbol");
let numTwo = document.querySelector("#second-number");
let results = document.querySelector("#result")
let equal = document.querySelector("#equal-btn");

equal.addEventListener("click",() => {

let num1 = parseFloat(numOne.value);
let num2 = parseFloat(numTwo.value);
let mathSymbol = mathsSymbol.value;


if (isNaN(num1) || isNaN(num2)) {
    results.textContent = "Please input valid numbers".
    results.style.color = "red";
} else {
    let result;

    if (mathSymbol === "+") {
        result = num1 + num2;
    } else if (mathSymbol === "-") {
        result = num1 - num2;
    } else if (mathSymbol === "*") {
        result = num1 * num2;
    } else if (mathSymbol === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            results.textContent = "Cannot divide by zero.";
            results.style.color = "red";
            result = null;
        }
    } else {
        results.textContent = "Invalid math symbol. Please use +, -, *, or /.";
        results.style.color = "red";
        result = null;
    }

    if (result !== null) {
        results.textContent = `The result is: ${result}`;
        results.style.color = "green";
    }
}
})



// let numOne = prompt("input number")
// let mathSymbol = prompt("math symbol")
// let numTwo = prompt("input num")

// let addision = numOne + numTwo;
// let division = numOne / numTwo;
// let subtraction = numOne - numTwo;
// let multiplication = numOne * numTwo;

// if(isNaN(numOne) || isNaN(numTwo)){
//     alert("Input a valid number")
// }

// let num1 = parseFloat(numOne);
// let num2 = parseFloat(numTwo)

// if (num1 + num2){
//     alert(`Your answer is ${addision}`)
// } else if(num1 / num2){
//     alert(`Your answer is ${division}`)
// } else if (num1 - num2){
//     alert (`Your answer is ${subtraction}`)
// } else if(num1 * num2){
//     alert(`Your answer is ${multiplication}`)
// }
