// Script Code

// set variables
const startButton = document.getElementById('start-btn');
const submitButton = document.getElementById('submit-btn');
const QuestionContainerEl = document.getElementById('container');
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-btns')
const timer = document.getElementById('timer');
let initialsEl = document.getElementById('initials');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)


let inProgress = 0;
let score = 0;
let timerInterval;



function setTime(secondsLeft) {
  let timer = document.getElementById("seconds");
  if (inProgress != true) {
    inProgress = true;
    timerInterval = setInterval(function () {
      secondsLeft--;
      timer.textContent = secondsLeft;
      // console.log("current timer: ", Timer.textContent);
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        inProgress = false;
        $("#startGame").show();
        gameMessage("Game over!");
      }
    }, 1000);
  }
}

function quizend() {
  clearInterval(timerInterval);
  $(".end-screen").removeClass("hide");
  $(".question-container").hide();
  let finalScore = document.getElementById("final-score") 
  finalScore.textContent = timer
}

function saveHighScore(){
  let initials = initialsEl.value.trim();
  if(initials !== ""){
    let highScore = JSON.parse(window.localStorage.getItem ("high-scores")) || [];
    let newScore = {
      score:timer,
      intials:initials
    };
    highScore.push(newScore);
    window.localStorage.setItem("high-scores", JSON.stringify(highScore)); 
    window.location.href = "highscore.html";
  }

}

function printHighScores(){
  let highScore = JSON.parse(window.localStorage.getItem ("high-scores")) || [];
  highScore.sort(function(a,b) {return(b.score - a.score)});
  document.getElementById("high-scores").innerHTML = localStorage.highScore;
}

// check for start button hide rules and display first question
function startGame() {
  console.log('started');
  $(".start-btn").hide();
  let time = questions.length*15
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  $(".rules").hide();
  $(".container").removeClass("hide");
  // if (currentQuestionIndex === questions.length){
  //   quizend();
  // }else { 
    setNextQuestion();
  // }
  setTime(time)
}

function setNextQuestion() {
  resetState()
   if (currentQuestionIndex === questions.length){
    quizend();
   } else
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionEl.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text
    button.classList.add('btn')
    // if (answer.correct) {
    button.dataset.correct = answer.correct
    // }
    button.addEventListener('click', selectAnswer)
    answerButtonsEl.appendChild(button)
  })
}

function resetState() {
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild)
  }
}
// setting correct value to target and letting it know to go to the next question
function selectAnswer(e) {
  console.log(e.target, 'e')
  console.log('is correct??', e.target.getAttribute('data-correct'))
  // when I click an answwer I want it to read weather it is true or false
  const isCorrect = e.target.getAttribute('data-correct')
  console.log(typeof isCorrect);
  if (isCorrect === 'true') {
    console.log('Is True');
    currentQuestionIndex++;
    setNextQuestion();
  } else {
    const timeLeft = timer.textContent;
    console.log("selectAnswer -> timeLeft", timeLeft);
    let minusTime = timeLeft - 10;
    console.log("selectAnswer -> minusTime", typeof minusTime);
    inProgress = false;
    clearInterval(timerInterval);
    setTime(minusTime);
  }
   // if true move on to the next questions
  // if false remove 5 seconds from game timer and move on to the next question
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
  // element.classList.remove('correct')
  // element.classList.remove('wrong')
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

submitButton.onclick = saveHighScore;