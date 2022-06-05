/* script to forward, save and display username to quizgame page */
    
let startButton = document.getElementById("begin");
let userName = document.getElementById("username");
    userName.focus();


    userName.addEventListener("keydown", function() {
        if (event.key === 'Enter') {
            let theUserName = document.getElementById('username').value;
            localStorage.setItem("name", theUserName);
        }
    })

    startButton.addEventListener("click", function() {
        let theUserName = document.getElementById("username").value;
        localStorage.setItem("name", theUserName);
    });