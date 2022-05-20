// Obtain username for local storage. Username is required to play quiz
let myName = localStorage.getItem("name");
    document.getElementById("hey").innerHTML = myName;


/** This function loads all event listeners after the DOM content has loaded,
 * and calls the startGame function to load the questions from the API
 */
document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for option buttons
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "correct") {
                alert("You clicked the correct option");
            } if (this.getAttribute("data-type") === "wrong") {
                alert("You clicked the wrong option");
            } if (this.getAttribute("data-type") === "submit") {
                alert("submiting!");
            } else {
                let nextStep = this.getAttribute("data-type");
                alert(`You clicked ${nextStep}`);
            }
        })
    }
})

// create variable to access the elements via the DOM
const submitBtn = document.getElementById("submit");
const nextStepBtn = document.getElementById("next-step");
const question = document.getElementById("question");
const correctBtn = document.getElementById("correct");
const wrongBtn = document.getElementById("wrong");



function runQuiz() {

}

function checkAnswer() {

}

function displayQuestion () {
    
}