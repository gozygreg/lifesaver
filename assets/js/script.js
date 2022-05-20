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
                let Step = this.getAttribute("data-type");
                alert(`You clicked ${Step}`);
            }
        })
    }
})

// create variable to access the elements via the DOM
const submitBtn = document.getElementById("submit");
const nextStepBtn = document.getElementById("next-step");
const prevStepBtn = document.getElementById("prev-step")
const question = document.getElementById("question");
const correctBtn = document.getElementById("correct");
const wrongBtn = document.getElementById("wrong");

// Create a viarable for current question. To access the right question by increamenting or decrementing this counter based on user's interactions with next and prev buttons
let currentQuestion = 0;

// Create a counter viarable for the score
let score = 0;

// Create an array of questions with options to choose from
let questions = [
    {
        question: "What do you do before you approach a person who has collapse?",
        answers: [
            {option: "Shout for help!", answer: true},
            {option: "Shake them gently", answer: false}
        ]
    },
    {
        question: "What do you do after you have shouted for help?",
        answers: [
            {option: "Shake them gently", answer: true},
            {option: "Look and listen for signs of normal breathing", answer: false}
        ]
    },
    {
        question: "What do you do after you shake them gently and they done respond?",
        answers: [
            {option: "Look and listen for signs of normal breathing", answer: true},
            {option: "", answer: false}
        ]
    },
    {
        question: "What do you do after you have look and listened for signs of normal breathing and there is none?",
        answers: [
            {option: "Fetch a defibrilator if you can", answer: true},
            {option: "Begin to cry and panic", answer: false}
        ]
    },
    {
        question: "What do you do after you have fetch the defibrillator?",
        answers: [
            {option: "Start chest compression immediately", answer: true},
            {option: "Expose their chest and think of chest compression", answer: false}
        ]
    },
    {
        question: "What do you do after you have done some chest compression?",
        answers: [
            {option: "If you have a defibrillator, switch it on and follow the instructions", answer: true},
            {option: "Throw the defibrillator away", answer: false}
        ]
    },
    {
        question: "What do you do after you have followed the instruction given by the defibrillator?",
        answers: [
            {option: "Resume or continue CPR until a paramedic arrives and tell you what to do or the person show signs of life", answer: true},
            {option: "Stop CPR as you are tired", answer: false}
        ]
    }
]





function runQuiz() {

}

function checkAnswer() {

}

function displayQuestion () {
    
}