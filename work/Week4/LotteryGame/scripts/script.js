var balls = [];
var drawnBalls = [];
var score = 0;

function createBall() {
    var randomNumber = Math.random();
    var ballColor;

    if (randomNumber < 0.5) {
        ballColor = "red";
    }
    else {
        ballColor = "white";
    }

    var ballPoints = Math.floor(Math.random() * 101);

    var ball =
    {
        color: ballColor,
        points: ballPoints
    };
    return ball;
}

function startGame() {
    for (var i = 0; i < 100; i++) {
        balls[i] = createBall();
    }

    while (true) {
        var input = prompt("Enter a number between 0-99 to draw a ball, or click Cancel to quit");

        if (input === null) {
            alert("Game Over! Final score: " + score);
            break;
        }

        var ballNumber = parseInt(input);

        if (isNaN(ballNumber) || ballNumber < 0 || ballNumber > 99) {
            alert("Please enter a valid number between 0 and 99");
            continue;
        }

        if (drawnBalls.includes(ballNumber)) {
            alert("You already drew this ball! Try another one");
            continue;
        }

        drawnBalls.push(ballNumber);
        var drawnBall = balls[ballNumber];

        alert("You drew a " + drawnBall.color + " ball worth " + drawnBall.points + " points!");

        if (drawnBall.color === "red") {
            score -= drawnBall.points;
            alert("Game Over! You drew a red ball. Final score: " + score);
            break;
        }
        else {
            score += drawnBall.points;
            alert("Current score: " + score);
        }
    }
}

startGame();