const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let  shuffledQuestions, currentQuestionIndex

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
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
  

  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    
}

const questions = [
    {
        question: 'What is not a JavaScript datatype?',
        answers: [
            {text: 'NaN', correct: true },
            {text: 'Object', correct: false },
            {text: 'Boolean', correct: false },
            {text: 'String', correct: false }
        ]
    },
    {

        question: 'What are all the looping structures in JavaScript?',
        answers: [
            {text: 'If-Then, While, Else', correct: false },
            {text: 'Do-while, While loops', correct: false },
            {text: 'For, While, Do-while loops', correct: true },
            {text: 'For, If-Then loops', correct: false }
        ]
    },

    {
        question: 'What is the pop() method used for?',
        answers: [
            {text: 'The pop() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.', correct: false },
            {text: 'The pop() method adds one or more elements to the end of an array and returns the new length of the array.', correct: false },
            {text: 'The pop() method removes the first element from an array and returns that removed element. This method changes the length of the array.', correct: false },
            {text: 'The pop() method takes the last element off of the given array and returns it. The array on which it is called is then altered', correct: true }
        ]
    },
    {
        question: 'What is the data type of variables in JavaScript?',
        answers: [
            {text: 'All variables in JavaScript are boolean data types.', correct: false },
            {text: 'All variables in JavaScript are object data types.', correct: true },
            {text: 'All variables in JavaScript are string data types.', correct: false },
            {text: 'All variables in JavaScript are integer data types.', correct: false }
        ]
    
    },
    {
        question: 'What are the ways to define a variable in JavaScript?',
        answers: [
            {text: 'while, var, let', correct: false },
            {text: 'var, const, for', correct: false },
            {text: 'for, while, if', correct: false },
            {text: 'var, const, let', correct: true }
        ]
    
    },
    {
        question: 'In how many ways a JavaScript code can be involved in an HTML file?',
        answers: [
            {text: 'Local, Internal, External', correct: false },
            {text: 'Inline, Internal, External', correct: true },
            {text: 'Local, Universal, Inline', correct: false },
            {text: 'Inline, External, Universal', correct: false }
        ]
    
    },
    {
        question: 'How to write a comment in JavaScript?',
        answers: [
            {text: 'Both: Single Line Comment: It is represented by // (double forward slash) and Multi-Line Comment: Slash represents it with asterisk symbol as /* write comment here */', correct: true },
            {text: 'Multi-Line Comment: Slash represents it with asterisk symbol as /* write comment here */', correct: true },
            {text: 'Single Line Comment: It is represented by // (double forward slash)', correct: false },
            {text: 'Double dash: It is represented by --', correct: false }
        ]
    
    },



]