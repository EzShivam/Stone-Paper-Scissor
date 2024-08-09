let userScore = 0;
let compScore = 0;

//tracking the choice thar user has selected
const choices = document.querySelectorAll(".choice");

//tracking the #msg to show the winner on the display
let msg = document.querySelector("#msg");

//tracking both the uses and comp score to update the score
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const optionIdx = Math.floor(Math.random() * 3)
    //the above stmt will generate any random no. between 0 to 2 , which we are going to use as index no for above options array.
    return options[optionIdx];
};

//drawn game function
const drawnGame = () => {
    msg.innerText = "Game was Drawn. Play again."
    msg.style.backgroundColor = "#081b31";
}

//showWinner Function which shows the winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose!");
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
};


//the main function to play the logic
const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);

    //to generate comp random choice
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);

    //comapring the choices and based upon that making the logic of winner.
    if (userChoice === compChoice) {
        //game drawn
        drawnGame();
    }

    //checking other conditions
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //comp choice will one out of "paper" and "scissor".
            userWin = compChoice == "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //comp choice will one out of "rock" and "scissor".
            userWin = compChoice == "scissor" ? false : true;
        }
        else {
            //comp choice will one out of "paper" and "rock".
            userWin = compChoice == "rock" ? false : true;
        }
        //function to show the winner
        showWinner(userWin, userChoice, compChoice);
    }
};


//to track user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // to track individual choice
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});