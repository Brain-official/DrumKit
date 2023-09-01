
var audio = new Audio("sounds/tom-1.mp3")

var firstButton = document.querySelectorAll(".drum")
for(let i = 0; i < firstButton.length; i++){
    firstButton[i].addEventListener("click", clickEvent)
}

function clickEvent() {
    this.style.color = "white"
}




//Calculator higher order function
// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function calculator(num1, num2, operation) {
//     return operation(num1, num2)
// }


// console.log(calculator(4,5, multiply))



//Javascript object

var employee = {
    name : "Timmy",
    age : 19,
    hasWorkPermit: true,
    languages : ["french", "english", "German"]
}

console.log(employee.age)







