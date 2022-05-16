// Obtain player's username for local storage. Username is required to play quiz.

let myName = localStorage.getItem("name");
    document.getElementById("hey").innerHTML = myName;

