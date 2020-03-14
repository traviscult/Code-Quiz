// Script Code

// set variables
const startButton = document.getElementById('start-btn');
const QuestionContainerEl = document.getElementById('container');

startButton.addEventListener('click', startGame)

// gameTimer = 120 * 1000ms
// let score = 0;

// timerLossForWrongAnswer = 5 * 1000ms

// check for start button
function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    QuestionContainerEl.classList.add('hide');
    
}
    
//    document.getElementById("staticBackdrop").classList.add('hide');  


// start timer - update top left timer


    // decrese timer by 1 seconds (1000ms)
// Question Loop
    // display question and answers
        // display in HTML ID -  quiz-zone

    // check for answer
        // an event attached to the 4 answeers

    // Input right or wrong

    // wrong no point, -5 timer
        // gameTimer - tierLossForWrongAnswer
    // right +1 point

    // if not end of questions || end of timer go back to question loop

// If player rus out of time, nil points - Fail pop up
    // Do you wnt to play again? ALERT pop up!


// After loop is complete check score
    // if high score enter user name
    // if not annouce they suck

    // Wait for input to restart game






