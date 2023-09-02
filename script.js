

//Detect button click events
var firstButton = document.querySelectorAll(".drum")
for(let i = 0; i < firstButton.length; i++){
    firstButton[i].addEventListener("click", clickEvent)
}



function clickEvent() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml)

    buttonAnimation(buttonInnerHtml)
    
}



//Detect the key pressed on keyboard
document.addEventListener("keydown", function(event){

    makeSound(event.key)

    buttonAnimation(event.key)
})



function makeSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3")
            audio.play()
            break;
        
        case "a":
            var audio = new Audio("sounds/kick.mp3")
            audio.play()
            break;
        
        case "s":
            var audio = new Audio("sounds/snare.mp3")
            audio.play()
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play()
            break;
        
        case "j":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play()
            break;
        
        case "k":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play()
            break;    
        
        case "l":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play()
            break;        
    
        default:
            break;
    }
}




function buttonAnimation(currentKey) {
    var selectedButton = document.querySelector("." + currentKey);
    selectedButton.classList.add("pressed");


    //This function removes the class "pressed" from the clicked button after a period of time.
    setTimeout(function() {
        selectedButton.classList.remove("pressed");
    }, 10)
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
// var employee = {
//     name : "Timmy",
//     age : 19,
//     hasWorkPermit: true,
//     languages : ["french", "english", "German"]
// }

// console.log(employee.age)




//Constructor function
function EmployeeRecords(name, age, hasWorkPermit,  languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;

    //Method
    this.moveSuitcase = function() {
        alert("May I move your  suitcase?")
        // picksuitcase();
        // move();
    }   
}

//Initialize the EmployeeRecords
// var employee = new EmployeeRecords("Jones", 28, true, ["english", "french"])
// employee.moveSuitcase();






//Callback function
// function anotherAddEventListener(typeOfEvent, callback) {


//     var eventThatHappened ={
//         eventType: "KeyPress",
//         key: "w",
//         noOfSeconds: 3,
//     }

//     if(eventThatHappened.eventType === typeOfEvent){
//         callback(eventThatHappened)
//     }
// }


// anotherAddEventListener("keyPress", function(event){
//     console.log(event)
// })





