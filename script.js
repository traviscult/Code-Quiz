// Script Code

// set variables
const startButton = document.getElementById('start-btn');
const QuestionContainerEl = document.getElementById('container');
const gameTimerEl = document.getElementById('timer');
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-btns')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

let gameTimerEL = 120 * 1000
let score = 0;

// timerLossForWrongAnswer = 5 * 1000ms

// check for start button hide rules and display first question
function startGame() {
    console.log('started');
    $( ".start-btn" ).hide();
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    $( ".rules" ).hide();;
    $( ".container" ).removeClass("hide");
    setNextQuestion()
}
     
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
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

function resetState() {
    clearStatusClass(document.body)
    while (answerButtonsEl.firstChild) {
      answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

// setting questions to an array of questions 
const questions = [
    {
        question: 'question 1',
        answers: [
          { text: '1', correct: true },
          { text: '2', correct: false },
          { text: '3', correct: false },
          { text: '4', correct: false }
        ]
      },
      {
        question: 'question 2',
        answers: [
          { text: '1', correct: true },
          { text: '2', correct: false },
          { text: '3', correct: false },
          { text: '4', correct: false }
        ]
      },
      {
        question: 'question 3',
        answers: [
          { text: '1', correct: true },
          { text: '2', correct: false },
          { text: '3', correct: false },
          { text: '4', correct: false }
        ]
      },
      {
        question: 'question 4',
        answers: [
          { text: '1', correct: true },
          { text: '2', correct: false },
          { text: '3', correct: false },
          { text: '4', correct: false }
        ]
      }
]


// start timer - update top left timer


    // decrese timer by 1 seconds (1000ms)
// Question Loop
    // display question and answers
        // display in HTML ID -  quiz-zone

    // check for answer
        // an event attached to the 4 answers

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






