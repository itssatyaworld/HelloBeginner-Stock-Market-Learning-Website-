// quiz.js

const quizData = [
    {
      question: "What is Sensex?",
      a: "Indian cricket team",
      b: "Stock market index",
      c: "Type of bond",
      d: "Bank account",
      correct: "b"
    },
    {
      question: "Who regulates the Indian stock market?",
      a: "SEBI",
      b: "RBI",
      c: "NSE",
      d: "BSE",
      correct: "a"
    },
    // Add many more questions similarly
  ];
  
  let currentQuiz = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answerEls = document.querySelectorAll(".answer");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
  }
  
  function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
      if(answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
        animateCorrectAnswer();
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        showFinalResult();
      }
    }
  });
  
  function animateCorrectAnswer() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.style.backgroundColor = "#28a745"; // green flash
    setTimeout(() => {
      quizContainer.style.backgroundColor = "#222"; // back to normal
    }, 500);
  }
  
  function showFinalResult() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correctly! 🎉</h2>
      <button onclick="location.reload()" class="btn btn-primary mt-4">Play Again</button>
    `;
  }
  