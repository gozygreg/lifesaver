// Obtain username for local storage. Username is required to play quiz
let myName = localStorage.getItem("name");
    document.getElementById("hey").innerHTML = myName;


/** This function loads all event listeners after the DOM content has loaded,
 * and calls the startGame function to load the questions from the API
 */
// document.addEventListener("DOMContentLoaded", function () {
    
//     let buttons = document.getElementsByTagName("button");
//     for (let button of buttons) {
//         button.addEventListener("click", function() {
//             if (this.getAttribute("data-type") === "correct") {
//                 nextStep();
//             } if (this.getAttribute("data-type") === "wrong") {
//                 alert("You clicked the wrong option, please try again.");
//                 restart();
//             } if (this.getAttribute("data-type") === "submit") {
//                 submit();
//             } if (this.getAttribute("data-type") === "restart") {
//                 restart();
//             } else {
//                 let Step = this.getAttribute("data-type");
//                 alert(`You clicked ${Step}`);
//             }
//         })
//     }
//     runQuiz();
    
// })

// create variable to access the elements via the DOM
const submitBtn = document.getElementById("submit");
const restartBtn = document.getElementById("restart");
const nextStepBtn = document.getElementById("nextstep");
const prevStepBtn = document.getElementById("prevstep");
const questionBox = document.getElementById("question-box");
const correctBtn = document.getElementById("correct");
const wrongBtn = document.getElementById("wrong");
const userScore = document.getElementById("user-score");
const index = document.getElementById("question-number");

// Create a viarable for current question. To access the right question by increamenting or decrementing this counter based on user's interactions with next and prev buttons
let currentQuestion = 0;

// Create a counter viarable for the score
let score = 0; 

// Create an array of questions with options to choose from.
let questions = [
    {
        question: "What do you do before you approach a person who has collapse?",
        answers: [{option: "Shout for help!", answer: true}, {option: "Shake them gently", answer: false}]
    },
    {
        question: "What do you do after you have shouted for help?",
        answers: [{option: "Shake them gently", answer: true}, {option: "Look and listen for signs of normal breathing", answer: false}]
    },
    {
        question: "What do you do after you shake them gently and they done respond?",
        answers: [{option: "Look and listen for signs of normal breathing", answer: true}, {option: "Fetch a defibrillator if you can", answer: false}]
    },
    {
        question: "What do you do after you have look and listened for signs of normal breathing and there is none?",
        answers: [{option: "Fetch a defibrilator if you can", answer: true}, {option: "Begin to cry and panic", answer: false}]
    },
    {
        question: "What do you do after you have fetch the defibrillator?",
        answers: [{option: "Start chest compression immediately", answer: true}, {option: "Expose their chest and think of chest compression", answer: false}]
    },
    {
        question: "What do you do after you have done some chest compression?",
        answers: [{option: "If you have a defibrillator, switch it on and follow the instructions", answer: true}, {option: "Throw the defibrillator away", answer: false}]
    },
    {
        question: "What do you do after you have followed the instruction given by the defibrillator?",
        answers: [{option: "Resume or continue CPR until a paramedic arrives and tell you what to do or the person show signs of life", answer: true}, {option: "Stop CPR as you are tired", answer: false}]
    }
]

// Add onclick events to the buttons which will call functions when a button is clicked
// correctBtn.addEventListener("click", finalStep);
// wrongBtn.addEventListener("click", wrong);
nextStepBtn.addEventListener("click", nextStep);
prevStepBtn.addEventListener("click", prevstep);
submitBtn.addEventListener("click", submit);
restartBtn.addEventListener("click", restart);
wrongBtn.addEventListener("click", restart );


/** 
 * Create function to runQuiz when the page loads. 
 * */ 
function runQuiz() {
    currentQuestion = 0;
    questionBox.innerHTML = questions[currentQuestion].question;
    correctBtn.innerHTML = questions[currentQuestion].answers[0].option;
    correctBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 7) {
                score++;   
            } 
        }  
        userScore.innerHTML = score;
        if(currentQuestion < 6) {
            nextStep();
        }
    }
    wrongBtn.innerHTML = questions[currentQuestion].answers[1].option;
    
    
    prevStepBtn.classList.add("hide");
}

runQuiz();



/**
* Create a function to restart the quiz The goal of this game quiz is to ensure that player or users follow the sequential steps
* needed to help save a person's life during cardiac arrest. Therefore, a wrong answer to a question will lead to retarting the quiz. 
* The only time users fail the quiz is when they quit. Finishing the quiz is as good as getting all the answers right and learning on the way.
*/

function restart() {
    currentQuestion = 0;
    prevStepBtn.classList.remove("hide")
    nextStepBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    correctBtn.classList.remove("hide");
    wrongBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    runQuiz();
}

// Create function that will take user to next question
function nextStep() {
    currentQuestion++;
    if (currentQuestion >= 6) {
        nextStepBtn.classList.add("hide");
        prevStepBtn.classList.remove("hide");
    }
    questionBox.innerHTML = questions[currentQuestion].question;
    correctBtn.innerHTML = questions[currentQuestion].answers[0].option;
    correctBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 7) {
                score++;
            } if (score == 7) {
                alert("Yes! You just saved a life. Click the submit button to see your actions");
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 6) {
            nextStep();
        }
    }
    wrongBtn.innerHTML = questions[currentQuestion].answers[1].option;
    
    prevStepBtn.classList.remove("hide");
}


//Create submit function that congratulates users for completing the game quiz.
function submit() {
    prevStepBtn.classList.add("hide");
    nextStepBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    correctBtn.classList.add("hide");
    wrongBtn.classList.add("hide");
    questionBox.innerHTML = "Congratulations, YOU SAVED HIS LIFE through your prompt actions"
}

