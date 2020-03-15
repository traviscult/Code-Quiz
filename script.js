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


// check for start button hide rules and display first question
function startGame() {
    console.log('started');
    $( ".start-btn" ).hide();
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    $( ".rules" ).hide();
    $( ".container" ).removeClass("hide");
    setNextQuestion()
    startTimer()
}
     
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
      //this will not disply the answers in the answer buttons!!!!!!!!!!!!!!!!!!!!!!
      button.innerText = answer.text
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsEl.appendChild(button)
    })
  }

function selectAnswer() {
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
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        answers: [
          { text: 'if i =! 5 then', correct: false },
          { text: 'if (i <> 5)', correct: false },
          { text: 'if i <> 5', correct: false },
          { text: 'if (i != 5)  ', correct: true }
        ]
      }
]