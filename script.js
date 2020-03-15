// Script Code

// set variables
const startButton = document.getElementById('start-btn');
const QuestionContainerEl = document.getElementById('container');
const gameTimerEl = document.getElementById('timer');
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-btns')
const Timer = document.getElementById('timer');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

let gameTimer = 75;
let minutesDisplay = document.querySelector("#minutes");
let secondsDisplay = document.querySelector("#seconds");
let startTimer = document.querySelector("#start-btn");
let score = 0;

// timerLossForWrongAnswer = 5 * 1000ms
// function startTimer() {

// }

// function setTime(secondsLeft) {
//   let timeLeft = document.getElementById("timer");
//   if (inProgress != true) {
//       inProgress = true;
//       var timerInterval = setInterval(function () {
//           secondsLeft--;
//           timeLeft.textContent = secondsLeft;
//           console.log("current timer: ", timeLeft.textContent);
//            if (secondsLeft === 0) {
//               clearInterval(timerInterval);
//               inProgress = false;
//               $("#startGame").show();
//               gameMessage("Game over!");
//           }
//       }, 1000);
//   }
// }


// check for start button hide rules and display first question
function startGame() {
    console.log('started');
    $( ".start-btn" ).hide();
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    $( ".rules" ).hide();
    $( ".container" ).removeClass("hide");
    setNextQuestion()
    // setTime()
}
     
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
      //this will not disply the answers in the answer buttons!!!!!!!!!!!!!!!!!!!!!!
      const button = document.createElement('button');
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsEl.appendChild(button)
    })
  }

  function resetState() {
    clearStatusClass(document.body)
    while (answerButtonsEl.firstChild) {
      answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
  }

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    } else {
      startButton.innerText = 'Restart' 
    }
    
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}
  
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// setting questions to an array of questions 
const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
          { text: '<javascript> ', correct: false },
          { text: '<js>', correct: false },
          { text: '<script> ', correct: true },
          { text: '<scripting>', correct: false }
        ]
      },
      {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
          { text: 'alert("Hello World"); ', correct: true },
          { text: 'msg("Hello World");', correct: false },
          { text: 'msgBox("Hello World");', correct: false },
          { text: 'alertBox("Hello World");', correct: false }
        ]
      },
      {
        question: 'How to write an IF statement in JavaScript?',
        answers: [
          { text: 'if i = 5 then', correct: false },
          { text: 'if (i == 5)  ', correct: true },
          { text: 'if i == 5 then', correct: false },
          { text: 'if i = 5', correct: false }
        ]
      },
      {
        question: 'How does a FOR loop start?',
        answers: [
          { text: 'for (i <= 5; i++) ', correct: false },
          { text: 'for (i = 0; i <= 5; i++)  ', correct: true },
          { text: 'for i = 1 to 5', correct: false },
          { text: 'for (i = 0; i <= 5)', correct: false }
        ]
      },
      {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        answers: [
          { text: 'if i =! 5 then', correct: false },
          { text: 'if (i <> 5)', correct: false },
          { text: 'if i <> 5', correct: false },
          { text: 'if (i != 5)  ', correct: true }
        ]
      }
]