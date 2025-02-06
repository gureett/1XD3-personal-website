function startGame() {
    var num1 = Math.floor(Math.random() * 201) - 100;
    var num2 = Math.floor(Math.random() * 201) - 100;
    var correctAnswer = num1 + num2;

    while (true) {
        var answer = prompt("What is " + num1 + " + " + num2 + "?");
        
        if (answer === null) {
            document.getElementById("message").style.display = "block";
            return;
        }
        
        answer = parseInt(answer);
        
        if (isNaN(answer)) {
            alert("Please enter a valid number!");
            continue;
        }
        
        if (answer === correctAnswer) {
            alert("Correct! Good job!");
            break;
        } else {
            alert("Wrong answer, try again!");
        }
    }
    
    var playAgain = confirm("Want to try another?");
    
    if (playAgain) {
        startGame();
    } else {
        document.getElementById("message").style.display = "block";
    }
}

startGame();