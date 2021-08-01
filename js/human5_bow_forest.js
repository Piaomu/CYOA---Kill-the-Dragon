const quizData = [
  {
    question: "You really wanna get up in this puss?",
    a: "Fuck yes, zombie puss is my kink.", //kinky
    b: "Oh god, no.", //turnoff
    c: "If it grants me magical powers, sure.", //curious
    d: "No. But I have no shame, so...yeah?", //shameless
    kinky: "a",
    turnoff: "b",
    curious: "c",
    shameless: "d",
  },
  {
    question: "This puss is full of all kinds of unsettling things. On the plus side, if you get in this puss, It'll grant you magical immunity from dragon's fire. Any questions?",
    a: "Nope, seems pretty straightforward to me.", //kinky
    b: "Yeah, a bunch, actually...", //turnoff
    c: "Coincidentally, I'm about to fight a dragon. Let's bang!", //shameless
    d: "Do any of the 'unsettling things' bite?", //curious
    kinky: "a",
    turnoff: "b",
    curious: "d",
    shameless: "c",
  },
  {
    question: "If a south-bound train leaves the Wicked Wood at 8:30pm at 50mph and an east-bound train leaves Mire Gulch at 3:40am at 60mph, will they ever collide?",
    a: "Silly hussy. Everyone knows Mire Gulch doesn't service trains past midnight.", //kinky
    b: "Depends. Is the moon waxing, waning, or full?", //curious
    c: "Not gonna lie...I'm scared as fuck of trains.", //turnoff
    d: "Does this question have any bearing on getting up in that puss?", //shameless
    kinky: "a",
    turnoff: "c",
    curious: "b",
    shameless: "d",
  },
  {
    question: "Ah, well glad we got some clarification on the train issue. One more thing: If you get in this puss, I need YOU to get IN this PUSS. Like your whole body. Better bring your weapons. Are you ready?",
    a: "Honestly, that's what I thought this was all about anyway.", //curious
    b: "Gotta say, questing through zombie puss is a first. But this is a bullshit game anyway, so sure!", //shameless
    c: "I can't tell if I'm aroused or terrified. But here we go, I guess...", //turnoff
    d: "*Thumbs awkward boner*", //kinky
    kinky: "d",
    turnoff: "c",
    curious: "a",
    shameless: "b",
  },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let kinky = 0
let turnoff = 0
let curious = 0
let shameless = 0

loadQuiz()

function loadQuiz() {
deselectAnswer()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswer() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer

  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  
  if(answer) {
    if(answer === quizData[currentQuiz].kinky) {
      kinky++
    } else if(answer === quizData[currentQuiz].curious) {
      curious++
    } else if(answer === quizData[currentQuiz].shameless) {
      shameless++
    } else if(answer === quizData[currentQuiz].turnoff) {
      turnoff++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2 class="survey-end">Alright, you seem to be ${kinky} parts kinky, ${curious} parts curious, ${shameless} parts shameless, and ${turnoff} parts turned off.
      <br> <br>
      Seems like you're ready to get up in this puss. I just gotta get wet. Just kidding, I'm a fucking lake zombie. Hop on in!</h2>
      <a class="btn" href="#">Get up in that puss</a>
      `
    }
  }
})